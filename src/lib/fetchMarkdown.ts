interface Metadata {
	title: string;
	day: number;
	month: number;
	year: number;
	description: string;
	readingTime: string;
}

export interface Blog {
	meta: Metadata;
	content: string;
}

export async function fetchMarkdownFiles() {
	const allPostFiles = import.meta.glob('/src/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const result = (await resolver()) as { metadata: Metadata; default: string };
			const { metadata } = result as { metadata: Metadata };

			const postPath = path.split('/').at(-1)?.replace('.md', '');
			const content = result.default;

			return {
				meta: metadata,
				path: postPath,
				content
			};
		})
	);

	return allPosts;
}
