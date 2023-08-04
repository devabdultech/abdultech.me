<script>
	import TechStackIcon from '../ui/TechStackIcon.svelte';
	import { ArrowRightIcon, Code2Icon } from 'lucide-svelte';
	import frontend from '../../data/frontend.json';
	import backend from '../../data/backend.json';
	import tooling from '../../data/tooling.json';
	import tolearn from '../../data/tolearn.json';
</script>

<div id="stack" class="mb-16 scroll-mt-16 text-textPrimary lg:min-h-screen lg:scroll-mt-24">
	<h1
		class="font-inter mb-4 flex items-center gap-2 text-2xl font-bold uppercase tracking-wide lg:text-3xl"
	>
		Tech stack <Code2Icon />
	</h1>
	<p class="text-lg font-[300] leading-relaxed text-textPrimary">
		In the realm of code, my primary stack encompasses Javascript and TypeScript, harmoniously
		weaving their magic in web development. From Node to React, Next.js to Expresss, and exploring
		the promising realms of Deno and Bun.
	</p>

	<div class="mt-5 flex flex-col gap-6">
		<div class="flex flex-col gap-y-2">
			<h2 class="text-lg font-[500] uppercase tracking-wider">Frontend</h2>
			<div class="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
				{#each frontend as f (f.id)}
					<TechStackIcon name={f.name} />
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-y-2">
			<h2 class="text-lg font-[500] uppercase tracking-wider">Backend</h2>
			<div class="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
				{#each backend as b (b.id)}
					<TechStackIcon name={b.name} />
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-y-2">
			<h2 class="text-lg font-[500] uppercase tracking-wider">Dev Ops and Tooling</h2>
			<div class="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
				{#each tooling as t (t.id)}
					<TechStackIcon name={t.name} />
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-3 rounded-lg border p-5">
			<span>
				<ArrowRightIcon class="inline-block h-5 w-5" />
				Other things I am currently exploring, planning to delve into further, or have on my radar for
				future learning:
			</span>

			<div class="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
				{#each tolearn as tl (tl.id)}
					<TechStackIcon name={tl.name} />
				{/each}
			</div>
		</div>
	</div>
</div>
