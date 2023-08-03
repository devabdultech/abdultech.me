<script>
	import TechStackIcon from './TechStackIcon.svelte';
	import frontend from '../../data/frontend.json';
	import backend from '../../data/backend.json';
	import tooling from '../../data/tooling.json';
</script>

<div id="stack" class="">
	<h1 class="text-3xl lg:text-3xl font-bold font-souvenir mb-4">Tech stack</h1>
	<p>
		In the realm of code, my primary stack encompasses Javascript and TypeScript, harmoniously
		weaving their magic in web development. From Node to React, Next.js to Expresss, and exploring
		the promising realms of Deno and Bun.
	</p>

	<div class="mt-5 flex flex-col gap-6">
		<div class="flex flex-col gap-y-2">
			<h2 class="uppercase text-md">Frontend</h2>
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
				{#each frontend as f (f.id)}
					<TechStackIcon name={f.name} />
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-y-2">
			<h2 class="uppercase text-md">Backend</h2>
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
				{#each backend as b (b.id)}
					<TechStackIcon name={b.name} />
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-y-2">
			<h2 class="uppercase text-md">Dev Ops and Tooling</h2>
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
				{#each tooling as t (t.id)}
					<TechStackIcon name={t.name} />
				{/each}
			</div>
		</div>
	</div>
</div>
