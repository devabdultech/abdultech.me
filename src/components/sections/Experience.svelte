<script lang="ts">
	import { ArrowRightIcon } from 'lucide-svelte';
	import Accordion from '../ui/Accordion.svelte';
</script>

<div
	id="experience"
	class="mb-16 font-space slide-enter-content scroll-mt-16 text-textPrimary lg:scroll-mt-24"
>
	<h1 class="flex items-center gap-2 mb-4 text-2xl font-bold uppercase font-inter lg:text-3xl">
		Experience
	</h1>

	<Accordion />

	<div class="mt-12">
		<a
			class="inline-flex items-center font-semibold leading-tight transition-colors group text-slate-200 hover:text-textAccent motion-reduce:transition-none"
			aria-label="View Full Résumé"
			href="/abdultech-resume.pdf"
			target="_blank"
		>
			<span
				class="pb-px transition border-b border-transparent group-hover:border-textAccent motion-reduce:transition-none"
			>
				View Full Résumé
			</span>
			<span class="whitespace-nowrap">
				<ArrowRightIcon
					class="inline-block w-4 h-4 ml-1 transition-transform -translate-y-px shrink-0 group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
				/>
			</span>
		</a>
	</div>
</div>
