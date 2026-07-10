import { access } from 'node:fs/promises';

const required = [
  'briefing/briefing-normalizado.md',
  'data/design-system.json',
  'data/content.json',
  'data/final-design-system.json',
  'data/final-site-build-prompt.md',
  'data/blog-posts.json',
  'jumper.config.json',
  'src/pages/index.astro',
  'src/pages/admin/index.astro',
  'src/pages/api/blog-posts.ts',
  'src/pages/api/blog-upload.ts',
  'README.md',
];

const missing = [];
for (const file of required) {
  try { await access(new URL(`../${file}`, import.meta.url)); }
  catch { missing.push(file); }
}

if (missing.length) {
  console.error(`Estrutura incompleta:\n${missing.join('\n')}`);
  process.exit(1);
}

console.log('Doctor Casa Beliê: estrutura obrigatória presente.');
