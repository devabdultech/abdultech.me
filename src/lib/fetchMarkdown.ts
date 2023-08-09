interface Metadata {
	title: string;
	day: number;
	month: number;
	year: number;
	description: string;
	readingTime: string;
}

export interface Blog {
	slug: string;
	meta: Metadata;
}

export async function fetchMarkdownFiles() {
	// eslint-disable-next-line prefer-const
	let blogPosts: Blog[] = [];

	const allPostFiles = import.meta.glob('/src/blog/*.md', { eager: true });
	for (const path in allPostFiles) {
		const file = await allPostFiles[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Blog, 'slug'>;

			const blog = { slug, ...metadata };
			blogPosts.push(blog);
		}
	}

	console.log(blogPosts);

	return blogPosts;
}
