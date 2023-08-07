<script>
	import { page } from '$app/stores';
	import { ChevronsLeftIcon, DotIcon } from 'lucide-svelte';

	let title = $page.params.slug.replace(/-/g, ' ');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="">
	<a
		href="/blog"
		class="group mb-3 flex cursor-pointer items-center gap-2 p-0 text-textAccent transition-all"
	>
		<ChevronsLeftIcon class="h-6 w-6 transform duration-200 group-hover:-translate-x-1" />
		<span class="">cd ..</span>
	</a>

	<div class="mt-4">
		<h1 class="font-inter text-2xl font-bold">{title}</h1>
		<div class="font-inter mt-1 flex items-center gap-2">
			<span class="text-textPrimary/50">July 19</span>
			<DotIcon class="h-4 w-4 text-textPrimary/50" />
			<span class="text-textPrimary/50">10 min</span>
		</div>
	</div>
</main>
