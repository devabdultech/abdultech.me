<script lang="ts">
	import { ArrowRightIcon } from 'lucide-svelte';
</script>

<div
	id="experience"
	class="font-space slide-enter-content mb-16 scroll-mt-16 text-textPrimary lg:scroll-mt-24"
>
	<h1 class="font-inter mb-4 flex items-center gap-2 text-2xl font-bold uppercase lg:text-3xl">
		Experience
	</h1>
	<p class="text-lg font-[300] leading-relaxed text-textPrimary">
		No experience yet, but I'm looking for an internship
	</p>

	<div class="mt-12">
		<a
			class="group inline-flex items-center font-semibold leading-tight text-slate-200 transition-colors hover:text-textAccent motion-reduce:transition-none"
			aria-label="View Full Résumé"
			href="/resume.pdf"
			target="_blank"
		>
			<span
				class="border-b border-transparent pb-px transition group-hover:border-textAccent motion-reduce:transition-none"
			>
				Embark on my professional adventure - Résumé
			</span>
			<span class="whitespace-nowrap">
				<ArrowRightIcon
					class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
				/>
			</span>
		</a>
	</div>
</div>
