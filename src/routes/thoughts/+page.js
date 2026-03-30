export const prerender = true;

export async function load() {
  // Import all markdown files from src/lib/posts/
  const modules = import.meta.glob('/src/lib/posts/*.md', { eager: true });
  const posts = Object.entries(modules)
    .map(([path, mod]) => ({
      slug: mod.metadata.slug,
      title: mod.metadata.title,
      date: mod.metadata.date,
      tags: mod.metadata.tags || [],
      excerpt: mod.metadata.excerpt || ''
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return { posts };
}
