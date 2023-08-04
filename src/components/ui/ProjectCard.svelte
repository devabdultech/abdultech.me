<script lang="ts">
	interface Props {
		name: string;
		description: string;
		image_src: string;
		github_url: string;
		website_url?: string;
		tech_stack: string[];
	}

	export let name: Props['name'];
	export let description: Props['description'];
	export let image_src: Props['image_src'];
	export let github_url: Props['github_url'];
	export let website_url: Props['website_url'];
	export let tech_stack: Props['tech_stack'];
</script>

<div class="flex w-full flex-col md:max-w-[250px] lg:max-w-[300px]">
	<a class="flex flex-col rounded-lg" href={github_url} target="_blank" rel="noopener noreferrer">
		<div class="flex-grow rounded-md">
			{#if website_url}
				<a href={website_url}>
					<img src={image_src} alt={'Screenshot of ' + name} class="h-auto w-full rounded-lg" />
				</a>
			{:else}
				<img src={image_src} alt={'Screenshot of ' + name} class="h-auto w-full rounded-lg" />
			{/if}
		</div>

		<div class="mt-1">
			<h2 class="mb-2 text-xl font-semibold">{name}</h2>
			<p class="mb-2 font-[300] text-textPrimary/80">{description}</p>
			<div class="flex flex-grow flex-wrap gap-2 lg:hidden">
				{#each tech_stack as tech}
					<span class="rounded-lg bg-textAccent px-2 py-1 text-sm text-black">{tech}</span>
				{/each}
			</div>
		</div>
	</a>
</div>
