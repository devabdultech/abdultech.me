export async function load({ fetch }) {
	const response = await fetch('/api/posts');
	const posts = await response.json();

	return { posts };
}
