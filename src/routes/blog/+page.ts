import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const response = await fetch('/api/posts');
		const posts = await response.json();

		return {
			posts
		};
	} catch (error) {
		console.error('Failed to fetch data:', error);
		return {
			error: 'Failed to fetch data'
		};
	}
};
