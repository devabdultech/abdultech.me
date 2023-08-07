<script lang="ts">
	import { page } from '$app/stores';
	import { ChevronsLeftIcon, DotIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import type { Blog } from '$lib/fetchMarkdown';

	export let data;
	let selectedBlog: Blog;

	onMount(() => {
		selectedBlog = data.posts.find((blog: Blog) => blog.path === $page.params.slug);
	});
</script>

<svelte:head>
	<title>{selectedBlog.meta.title}</title>
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
			<h1 class="font-inter text-2xl font-bold">{selectedBlog.meta.title}</h1>
			<div class="font-inter mt-1 flex items-center gap-2">
				<span class="text-textPrimary/50">{selectedBlog.meta.month} {selectedBlog.meta.day}</span>
				<DotIcon class="h-4 w-4 text-textPrimary/50" />
				<span class="text-textPrimary/50">{selectedBlog.meta.readingTime}</span>
			</div>
		</div>

		<div class="prose mt-4">
			{@html selectedBlog.content}
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</main>
