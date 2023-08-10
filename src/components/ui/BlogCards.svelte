<script lang="ts">
	import { ArrowRightIcon } from 'lucide-svelte';

	export let title: string;
	export let description: string;
	export let link: string;
	export let day: number;
	export let month: number;
	export let year: number;
	export let readingTime: string;
</script>

<a
	class="rounded-lg border border-[#0A1512] px-3 py-4 hover:bg-[#040907] lg:px-4 lg:py-6"
	href={`/thoughts/${link}`}
	aria-label="read writings"
>
	<div class="flex flex-col gap-4">
		<h1 class="text-xl font-semibold uppercase leading-relaxed tracking-wide">
			{title}
		</h1>
		<p class="font-inter truncate text-base font-[300] leading-relaxed tracking-normal">
			{description}
		</p>

		<div class="font-inter flex items-center justify-between text-sm text-textPrimary/80">
			<span>{day} {month}, {year}</span>
			<span>{readingTime}</span>
		</div>
	</div>
</a>
