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

<div
	class="flex flex-col gap-4 rounded-lg border border-[#0A1512] bg-[#040907] px-3 py-4 lg:px-4 lg:py-6"
>
	<h1 class="text-xl font-semibold uppercase leading-3 tracking-wide">
		{title}
	</h1>
	<p class="font-inter truncate text-base font-[300] leading-relaxed tracking-normal">
		{description}
	</p>

	<div class="">
		<a
			class="group inline-flex items-center font-semibold leading-tight text-slate-200 transition-colors hover:text-textAccent motion-reduce:transition-none"
			aria-label="Read more"
			href={`/blog/${link}`}
		>
			<span
				class="border-b border-transparent pb-px transition group-hover:border-textAccent motion-reduce:transition-none"
			>
				Read more
			</span>
			<span class="whitespace-nowrap">
				<ArrowRightIcon
					class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
				/>
			</span>
		</a>
	</div>

	<div class="font-inter flex items-center justify-between text-sm text-textPrimary/80">
		<span>{day} {month}, {year}</span>
		<span>{readingTime}</span>
	</div>
</div>
