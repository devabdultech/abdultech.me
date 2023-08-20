<script lang="ts">
	import { page } from '$app/stores';
	import { ChevronsLeftIcon, DotIcon } from 'lucide-svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:site_name" content="AbdulTech" />
	<meta name="description" content={data.meta.description} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:url" content={$page.url.href} />
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<main class="">
	<a
		href="/thoughts"
		class="group mb-3 flex cursor-pointer items-center gap-2 p-0 text-textAccent transition-all"
	>
		<ChevronsLeftIcon class="h-6 w-6 transform duration-200 group-hover:-translate-x-1" />
		<span class="">cd ..</span>
	</a>

	<div class="mt-4">
		<h1 class="font-inter text-2xl font-bold">{data.meta.title}</h1>
		<div class="font-inter mt-1 flex items-center gap-2">
			<span class="text-textPrimary/50">{data.meta.month} {data.meta.day}, {data.meta.year} </span>
			<DotIcon class="h-4 w-4 text-textPrimary/50" />
			<span class="text-textPrimary/50">{data.meta.readingTime}</span>
		</div>
	</div>

	<div class="prose slide-enter-content font-inter mt-5 text-base leading-normal text-textPrimary/90 lg:text-lg">
		<svelte:component this={data.content} />
	</div>
</main>
