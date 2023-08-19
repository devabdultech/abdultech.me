<script lang="ts">
	import { onMount } from 'svelte';
	import type { Metadata } from '$lib/types';
	import BlogCards from '../ui/BlogCards.svelte';
	import { ArrowRightIcon } from 'lucide-svelte';

	interface MetadataWithSlug extends Metadata {
		slug: string;
	}
	let blogCards: MetadataWithSlug[] = [];

	onMount(async () => {
		try {
			const response = await fetch('/api/posts');
			const data = await response.json();

			blogCards = data;
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
		Thoughts || Writing
	</h1>
	<p class="text-lg font-[300] leading-relaxed text-textPrimary">
		Now, about that part of my portfolio where I spill my thoughts and bring the heat with my
		<span class="cursor-pepper font-medium">spiciest, hottest</span> takes haha – yeah, i wouldn't call
		it a blog. No pressure to be all professional and buttoned-up here. It's more like a cozy nook where
		I let loose and share my rants, raves, and everything I've learned from what I love.
	</p>

	<div class="mt-12 flex flex-col gap-y-6">
		{#each blogCards.slice(0, 3) as blogCard}
			<BlogCards
				title={blogCard.title}
				description={blogCard.description}
				link={blogCard.slug}
				day={blogCard.day}
				month={blogCard.month}
				year={blogCard.year}
				readingTime={blogCard.readingTime}
			/>
		{/each}
	</div>

	<div class="mt-4">
		<a
			class="group inline-flex items-center font-semibold leading-tight text-slate-200 transition-colors hover:text-textAccent motion-reduce:transition-none"
			aria-label="Read more"
			href="/thoughts"
		>
			<span
				class="border-b border-transparent pb-px transition group-hover:border-textAccent motion-reduce:transition-none"
			>
				Read more of my random thoughts :)
			</span>
			<span class="whitespace-nowrap">
				<ArrowRightIcon
					class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
				/>
			</span>
		</a>
	</div>
</div>
