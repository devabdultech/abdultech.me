import { fetchMarkdownFiles } from '$lib/fetchMarkdown';
import { test, expect, describe } from 'vitest';

describe('markdown files return an array of blog posts', async () => {
	test('get markdown files and return array of blog posts', async () => {
		const blogPosts = await fetchMarkdownFiles();
		expect(Array.isArray(blogPosts)).toBe(true);
	});
});
