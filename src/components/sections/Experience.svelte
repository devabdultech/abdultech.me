<script lang="ts">
	import DreamCompanies from '../ui/DreamCompanies.svelte';
	import { ArrowRightIcon } from 'lucide-svelte';
</script>

<div
	id="experience"
	class="font-space mb-16 scroll-mt-16 text-textPrimary lg:min-h-screen lg:scroll-mt-24"
>
	<h1 class="font-inter mb-4 flex items-center gap-2 text-2xl font-bold uppercase lg:text-3xl">
		Experience
	</h1>
	<p class="text-lg font-[300] leading-relaxed text-textPrimary">
		No experience yet, but for the fun of it, here are my 🌟 Dream-Infused Professional Ventures 🌟
		😄:
	</p>

	<div class="mt-5 flex flex-col gap-3">
		<DreamCompanies
			name="Apple"
			title="Software developer"
			from="2023"
			to="present"
			color="white"
		/>
		<DreamCompanies name="NASA" title="Software developer" from="2023" to="present" color="white" />
		<DreamCompanies
			name="Samsung"
			title="Senior OneUI engineer"
			from="2023"
			to="present"
			color="white"
		/>
		<DreamCompanies
			name="SpaceX"
			title="Software developer"
			from="2023"
			to="present"
			color="white"
		/>
	</div>

	<div class="mt-8 text-center">
		<p class="animate-pulse text-lg font-semibold">
			Disclaimer: While my imagination has a stellar resume, my earthly journey is still in
			progress! 🌌
		</p>
	</div>

	<div class="mt-12">
		<a
			class="group inline-flex items-center font-semibold leading-tight text-slate-200 transition-colors hover:text-textAccent motion-reduce:transition-none"
			aria-label="View Full Résumé"
			href="/resume.pdf"
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
