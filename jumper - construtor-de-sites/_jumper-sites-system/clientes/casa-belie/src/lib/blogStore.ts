import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

export type BlogStatus = 'published' | 'draft' | 'archived';
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  status: BlogStatus;
  publishedAt: string | null;
  updatedAt: string;
  image: string;
  author: string;
}

const postsPath = fileURLToPath(new URL('../../data/blog-posts.json', import.meta.url));

export const slugify = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export async function readPosts(): Promise<BlogPost[]> {
  const content = await readFile(postsPath, 'utf8');
  return JSON.parse(content) as BlogPost[];
}

export async function writePosts(posts: BlogPost[]) {
  await writeFile(postsPath, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');
}

export function isAuthorized(password: string | null) {
  const configured = process.env.BLOG_ADMIN_PASSWORD || (import.meta.env.DEV ? 'belie-preview-2026' : '');
  return Boolean(configured && password && password === configured);
}

export function normalizePost(input: Partial<BlogPost>, existing?: BlogPost): BlogPost {
  const now = new Date().toISOString();
  const title = String(input.title || existing?.title || '').trim();
  const status = ['published', 'draft', 'archived'].includes(String(input.status)) ? input.status as BlogStatus : existing?.status || 'draft';
  return {
    id: existing?.id || input.id || crypto.randomUUID(),
    slug: slugify(String(input.slug || title || existing?.slug || 'post')),
    title,
    excerpt: String(input.excerpt || existing?.excerpt || '').trim(),
    content: String(input.content || existing?.content || '').trim(),
    status,
    publishedAt: status === 'published' ? (existing?.publishedAt || now) : existing?.publishedAt || null,
    updatedAt: now,
    image: String(input.image || existing?.image || '').trim(),
    author: String(input.author || existing?.author || 'Casa Beliê').trim(),
  };
}
