<script lang="ts">
	import { onMount } from 'svelte';
	import type { Metadata } from '$lib/types';
	import BlogCards from '../ui/BlogCards.svelte';

	interface MetadataWithSlug extends Metadata {
		slug: string;
	}
	let blogCards: MetadataWithSlug[] = [];

	onMount(async () => {
		try {
			const response = await fetch('/api/posts');
			const data = await response.json();

			blogCards = data;
			console.log(blogCards);
		} catch (error) {
			console.error('Failed to fetch data:', error);
		}
	});
</script>

<div
	id="thoughts"
	class="font-space mb-16 scroll-mt-16 text-textPrimary lg:min-h-screen lg:scroll-mt-24"
>
	<h1 class="font-inter mb-4 flex items-center gap-2 text-2xl font-bold uppercase lg:text-3xl">
		Thoughts | Blog
	</h1>
	<p class="text-lg font-[300] leading-relaxed text-textPrimary">
		Step into the realm of my musings, where thoughts intertwine with experiences, ideas dance with
		visions, and interests converge in a symphony of exploration.
	</p>

	<div class="mt-12 flex flex-col gap-y-6">
		{#each blogCards.slice(0, 3) as blogCard}
			<BlogCards
				title={blogCard.title}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur, ullam harum amet, amet congt jen"
				link={blogCard.slug}
				day={blogCard.day}
				month={blogCard.month}
				year={blogCard.year}
				readingTime={blogCard.readingTime}
			/>
		{/each}
	</div>
</div>
