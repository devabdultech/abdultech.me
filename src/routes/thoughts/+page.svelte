<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { ArrowUpRightIcon, DotIcon } from 'lucide-svelte';
	export let data: PageData;
	const { posts } = data;

	let url = ``;

	onMount(() => (url = window.location.href));
</script>

<svelte:head>
	<title>Spicy takes 🔥 | Writing 📝 - AbdulTech</title>
	<meta
		name="description"
		content="Step into my world of thoughts and experiences, where ideas mingle with visions and passions run wild in a mix of curiosity and discovery."
	/>
	<meta
		property="og:description"
		content="Step into my world of thoughts and experiences, where ideas mingle with visions and passions run wild in a mix of curiosity and discovery."
	/>
	<meta property="og:url" content={url} />
	<link rel="canonical" href={url} />
</svelte:head>

<div class="flex max-w-5xl flex-col gap-4">
	<div class="flex flex-col gap-3">
		<h1 class="font-inter text-xl font-[500] md:text-2xl lg:text-2xl">Thoughts</h1>
		<div class="font-space flex flex-col gap-1 text-base md:text-lg">
			<p class="">
				Step into my world of thoughts and experiences, where ideas mingle with visions and passions
				run wild in a mix of curiosity and discovery. So, why are we even doing this? Honestly, I'm
				not entirely sure, but here's the scoop:}
			</p>
			<p class="mt-3">
				It's not exactly a blog, because that sounds all official and regular – and that's just not
				me. I want to write stuff sometimes, and believe it or not, some of it might actually be
				kinda cool! So, if you're up for it, take a gander at one of these posts.
			</p>
		</div>
	</div>

	<div class="mt-6 flex flex-col gap-6">
		{#each posts as thoughts}
			<div class="flex w-full items-center gap-3">
				<div
					class="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-teal-600 p-5 text-center lg:h-24 lg:w-24"
				>
					<h1 class="text-sm font-bold lg:text-xl">{thoughts.day}</h1>
					<p class="text-sm font-medium text-textPrimary">
						{thoughts.month}, {thoughts.year}
					</p>
				</div>
				<div class="relative w-5/6 border-l border-l-textAccent py-3 pl-4">
					<div class="absolute -left-1.5 top-0 aspect-square w-3 rounded-full bg-textAccent" />
					<a href={`/thoughts/${thoughts.slug}`} class="group transition-all">
						<div class="flex gap-2 text-xl font-semibold transition-transform">
							<span class="text-base lg:text-lg">{thoughts.title}</span>
							<ArrowUpRightIcon
								size={16}
								class="transform duration-200 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
							/>
							<span class="flex items-center text-xs text-textPrimary/50"
								><DotIcon /> {thoughts.readingTime}</span
							>
						</div>
						<p
							class="mt-2 max-w-xs truncate text-sm font-medium leading-relaxed text-textPrimary/70 lg:mt-1"
						>
							{thoughts.description}
						</p>
						<div class="absolute -left-1.5 bottom-0 aspect-square w-3 rounded-full bg-textAccent" />
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
