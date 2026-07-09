#!/usr/bin/env node
/**
 * Baixa imagens Pexels para a pasta publica do cliente.
 *
 * Ordem correta:
 * 1. Assets reais do cliente quando existirem.
 * 2. Imagens geradas por IA pelo agente, sob medida para o briefing e DS final.
 * 3. Pexels como segunda opcao quando imagem IA, asset real ou fallback autoral nao resolverem.
 * 4. Fallback estatico do cliente se Pexels nao for executado.
 *
 * Uso:
 *   node scripts/hydrate-client-assets.mjs clientes/nome-do-cliente
 *
 * A chave pode vir do ambiente atual ou de `.env` na raiz do repositorio.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const systemRoot = resolve(scriptDir, '..');
const repoRoot = resolve(systemRoot, '..');

const parseEnvFile = (filePath) => {
  if (!existsSync(filePath)) return;

  const lines = readFileSync(filePath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex <= 0) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();
    if (!key || process.env[key]) continue;

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
};

[
  join(repoRoot, '.env'),
  join(systemRoot, '.env'),
].forEach(parseEnvFile);

const args = process.argv.slice(2);
const clientArg = args.find((arg) => !arg.startsWith('--'));
const dryRun = args.includes('--dry-run');

if (!clientArg) {
  console.error('Uso: node scripts/hydrate-client-assets.mjs clientes/[slug] [--dry-run]');
  process.exit(1);
}

const clientRoot = resolve(clientArg);
const contentPath = join(clientRoot, 'data', 'content.json');
const publicRoot = join(clientRoot, 'public');
const pexelsKey = process.env.PEXELS_API_KEY;

if (!pexelsKey) {
  console.warn('Aviso: PEXELS_API_KEY nao definido. Pexels e segunda opcao; prefira imagem gerada por IA ou asset real do cliente.');
}

if (!existsSync(contentPath)) {
  console.error(`content.json nao encontrado: ${contentPath}`);
  process.exit(1);
}

const content = JSON.parse(readFileSync(contentPath, 'utf8'));
const log = [];

const isLocalAsset = (value) => String(value || '').startsWith('/');
const sanitizeName = (value, fallback) => String(value || fallback)
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .slice(0, 70) || fallback;

const extensionFrom = (url, contentType) => {
  const fromUrl = extname(new URL(url).pathname).toLowerCase();
  if (['.jpg', '.jpeg', '.png', '.webp', '.avif', '.svg', '.pdf'].includes(fromUrl)) {
    return fromUrl === '.jpeg' ? '.jpg' : fromUrl;
  }

  if (contentType?.includes('png')) return '.png';
  if (contentType?.includes('webp')) return '.webp';
  if (contentType?.includes('avif')) return '.avif';
  if (contentType?.includes('svg')) return '.svg';
  if (contentType?.includes('pdf')) return '.pdf';
  return '.jpg';
};

const download = async (url, folder, filename) => {
  const targetDir = join(publicRoot, folder);
  mkdirSync(targetDir, { recursive: true });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Falha ao baixar ${url}: HTTP ${response.status}`);
  }

  const contentType = response.headers.get('content-type') || '';
  const ext = extensionFrom(url, contentType);
  const targetName = `${filename}${ext}`;
  const targetPath = join(targetDir, targetName);
  const publicPath = `/${folder}/${targetName}`;

  if (!dryRun) {
    const buffer = Buffer.from(await response.arrayBuffer());
    writeFileSync(targetPath, buffer);
  }

  return publicPath;
};

const searchPexels = async (query, orientation = 'landscape') => {
  if (!pexelsKey) return null;

  const url = new URL('https://api.pexels.com/v1/search');
  url.searchParams.set('query', query);
  url.searchParams.set('per_page', '1');
  url.searchParams.set('orientation', orientation);
  url.searchParams.set('locale', 'pt-BR');

  const response = await fetch(url, {
    headers: { Authorization: pexelsKey },
  });

  if (!response.ok) {
    throw new Error(`Pexels falhou para "${query}": HTTP ${response.status}`);
  }

  const data = await response.json();
  const photo = data.photos?.[0];
  return photo?.src?.large2x || photo?.src?.large || photo?.src?.original || null;
};

const resolveAsset = async ({ current, query, folder, filename, orientation = 'landscape' }) => {
  if (isLocalAsset(current)) return current;

  if (query) {
    const pexelsUrl = await searchPexels(query, orientation);
    if (pexelsUrl) {
      const downloaded = await download(pexelsUrl, folder, filename);
      log.push(`pexels "${query}": ${downloaded}`);
      return downloaded;
    }
  }

  return current ?? null;
};

const primaryMedia = content.primary_media || content.hero;
if (primaryMedia) {
  const primaryQuery = primaryMedia.image_query || `${content.business?.segment || ''} ${content.business?.name || ''} imagem principal`;
  primaryMedia.image = await resolveAsset({
    current: primaryMedia.image,
    query: primaryQuery,
    folder: 'fotos',
    filename: 'imagem-principal',
    orientation: 'landscape',
  });
  if (content.primary_media) {
    content.primary_media = primaryMedia;
  } else {
    content.hero = primaryMedia;
  }
}

if (Array.isArray(content.gallery)) {
  for (let index = 0; index < content.gallery.length; index += 1) {
    const item = content.gallery[index];
    item.src = await resolveAsset({
      current: item.src,
      query: item.query || item.alt,
      folder: 'fotos',
      filename: `galeria-${String(index + 1).padStart(2, '0')}-${sanitizeName(item.alt, 'imagem')}`,
      orientation: 'landscape',
    });
  }
}

if (Array.isArray(content.team)) {
  for (let index = 0; index < content.team.length; index += 1) {
    const member = content.team[index];
    member.photo = await resolveAsset({
      current: member.photo,
      query: `${member.name || ''} ${member.role || ''} professional portrait ${content.business?.segment || ''}`,
      folder: 'team',
      filename: `equipe-${String(index + 1).padStart(2, '0')}-${sanitizeName(member.name, 'pessoa')}`,
      orientation: 'portrait',
    });
  }
}

if (!dryRun) {
  writeFileSync(contentPath, JSON.stringify(content, null, 2) + '\n');
}

console.log(`\nAssets processados para: ${clientRoot}`);
if (log.length === 0) {
  console.log('Nenhuma imagem Pexels baixada. Use imagem gerada por IA, asset real do cliente ou revise PEXELS_API_KEY/queries se Pexels for necessario como segunda opcao.');
} else {
  log.forEach((item) => console.log(`- ${item}`));
}
if (dryRun) console.log('\nDry-run: nenhum arquivo foi escrito.');
