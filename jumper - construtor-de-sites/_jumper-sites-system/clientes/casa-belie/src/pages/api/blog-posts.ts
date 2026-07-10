import type { APIRoute } from 'astro';
import { isAuthorized, normalizePost, readPosts, writePosts } from '../../lib/blogStore';

export const prerender = false;
const passwordFrom = (request: Request) => request.headers.get('x-blog-password');
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });

export const GET: APIRoute = async ({ request }) => {
  const posts = await readPosts();
  if (passwordFrom(request)) {
    if (!isAuthorized(passwordFrom(request))) return json({ error: 'Senha incorreta.' }, 401);
    return json(posts.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)));
  }
  return json(posts.filter((post) => post.status === 'published').sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt))));
};

export const POST: APIRoute = async ({ request }) => {
  if (!isAuthorized(passwordFrom(request))) return json({ error: 'Não autorizado.' }, 401);
  const input = await request.json();
  if (!String(input.title || '').trim()) return json({ error: 'O título é obrigatório.' }, 400);
  const posts = await readPosts();
  const index = posts.findIndex((post) => post.id === input.id);
  const post = normalizePost(input, index >= 0 ? posts[index] : undefined);
  if (posts.some((item, current) => item.slug === post.slug && current !== index)) return json({ error: 'Já existe um post com este slug.' }, 409);
  if (index >= 0) posts[index] = post; else posts.unshift(post);
  await writePosts(posts);
  return json(post, index >= 0 ? 200 : 201);
};

export const DELETE: APIRoute = async ({ request }) => {
  if (!isAuthorized(passwordFrom(request))) return json({ error: 'Não autorizado.' }, 401);
  const { id } = await request.json();
  const posts = await readPosts();
  const next = posts.filter((post) => post.id !== id);
  if (next.length === posts.length) return json({ error: 'Post não encontrado.' }, 404);
  await writePosts(next);
  return json({ ok: true });
};
