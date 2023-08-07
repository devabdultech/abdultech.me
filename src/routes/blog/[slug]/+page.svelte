<script lang="ts">
	import { page } from '$app/stores';
	import { mdsvex } from 'mdsvex';
	import { ChevronsLeftIcon, DotIcon } from 'lucide-svelte';
	import { fetchMarkdownFiles } from '$lib/fetchMarkdown';

	interface Blog {
		title: string;
		day: number;
		month: string;
		year: string;
		description: string;
		readingTime: string;
		slug: string;
		content: string;
	}

	const blogs: Blog[] = fetchMarkdownFiles();

	let slug = $page.params.slug;

	let selectedBlog = blogs.find((blog) => blog.slug === slug);
</script>

<svelte:head>
	<title>{selectedBlog ? selectedBlog.title : 'Loading...'}</title>
</svelte:head>

<main class="">
	<a
		href="/blog"
		class="group mb-3 flex cursor-pointer items-center gap-2 p-0 text-textAccent transition-all"
	>
		<ChevronsLeftIcon class="h-6 w-6 transform duration-200 group-hover:-translate-x-1" />
		<span class="">cd ..</span>
	</a>

	{#if selectedBlog}
		<div class="mt-4">
			<h1 class="font-inter text-2xl font-bold">{selectedBlog.title}</h1>
			<div class="font-inter mt-1 flex items-center gap-2">
				<span class="text-textPrimary/50">{selectedBlog.month} {selectedBlog.day}</span>
				<DotIcon class="h-4 w-4 text-textPrimary/50" />
				<span class="text-textPrimary/50">{selectedBlog.readingTime}</span>
			</div>
		</div>

		<div class="prose mt-4">
			{@html selectedBlog.content}
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</main>
