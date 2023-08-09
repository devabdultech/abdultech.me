import { json } from '@sveltejs/kit';
import { fetchMarkdownFiles } from '$lib/fetchMarkdown';

export async function GET() {
	const posts = await fetchMarkdownFiles();

	return json(posts);
}
