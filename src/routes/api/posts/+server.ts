import { json } from '@sveltejs/kit';
import { fetchMarkdownFiles } from '$lib/fetchMarkdown';

export async function GET() {
	const posts = await fetchMarkdownFiles();
	// const sortedPosts = posts.sort((a, b) => {
	// 	const dateA = new Date(a.meta.year, a.meta.month, a.meta.day).getTime();
	// 	const dateB = new Date(b.meta.year, b.meta.month, b.meta.day).getTime();
	// 	return dateB - dateA;
	// });

	return json(posts);
}
