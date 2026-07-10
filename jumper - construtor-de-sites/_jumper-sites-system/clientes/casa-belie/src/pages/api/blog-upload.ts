import type { APIRoute } from 'astro';
import { mkdir, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isAuthorized, slugify } from '../../lib/blogStore';

export const prerender = false;
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });

export const POST: APIRoute = async ({ request }) => {
  if (!isAuthorized(request.headers.get('x-blog-password'))) return json({ error: 'Não autorizado.' }, 401);
  const form = await request.formData();
  const file = form.get('image');
  if (!(file instanceof File) || !file.type.startsWith('image/')) return json({ error: 'Envie um arquivo de imagem válido.' }, 400);
  if (file.size > 8 * 1024 * 1024) return json({ error: 'A imagem deve ter no máximo 8 MB.' }, 413);
  const allowed = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  const ext = extname(file.name).toLowerCase();
  if (!allowed.includes(ext)) return json({ error: 'Formato de imagem não permitido.' }, 400);
  const directory = fileURLToPath(import.meta.env.PROD
    ? new URL('../../client/uploads/blog/', import.meta.url)
    : new URL('../../../public/uploads/blog/', import.meta.url));
  await mkdir(directory, { recursive: true });
  const name = `${Date.now()}-${slugify(file.name.replace(ext, ''))}${ext}`;
  await writeFile(join(directory, name), Buffer.from(await file.arrayBuffer()));
  return json({ path: `/uploads/blog/${name}` }, 201);
};
