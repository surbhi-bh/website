export const prerender = true;

export async function load({ params }) {
  const modules = import.meta.glob('/src/lib/posts/*.md', { eager: true });
  const entry = Object.entries(modules).find(([path, mod]) => mod.metadata.slug === params.slug);
  if (!entry) return { status: 404 };
  const [, mod] = entry;
  return {
    metadata: mod.metadata,
    content: mod.default
  };
}
