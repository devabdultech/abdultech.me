import type { Blog } from './types';

export async function fetchMarkdownFiles() {
	// eslint-disable-next-line prefer-const
	let blogPosts: Blog[] = [];

	const allPostFiles = import.meta.glob('/src/thoughts/*.md', { eager: true });
	for (const path in allPostFiles) {
		const file = await allPostFiles[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Blog, 'slug'>;

			const blog = { slug, ...metadata };
			blogPosts.push(blog);
		}
	}

	return blogPosts;
}
