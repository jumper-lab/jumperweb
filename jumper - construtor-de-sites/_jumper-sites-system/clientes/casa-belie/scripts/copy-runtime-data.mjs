import { copyFile, mkdir } from 'node:fs/promises';

const source = new URL('../data/blog-posts.json', import.meta.url);
const runtimeDirectory = new URL('../dist/data/', import.meta.url);
const destination = new URL('../dist/data/blog-posts.json', import.meta.url);

await mkdir(runtimeDirectory, { recursive: true });
await copyFile(source, destination);

console.log('Dados do blog incluídos no pacote de produção.');
