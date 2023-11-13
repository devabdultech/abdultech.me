<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { ChevronDownIcon } from 'lucide-svelte';

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion();

	const items = [
		{
			id: 'item-1',
			title: 'Software Enginneer',
			company: 'Monos AI',
			year: '2023 - Present',
			description:
				'Worked on website and backend development for a startup that uses AI to help people with know more about Islam. I worked on the website and backend development using React, Next.js, and Node.js.'
		},
		{
			id: 'item-2',
			title: 'Software Enginneer Intern',
			company: 'Monos AI',
			year: '2023 - Present',
			description:
				'Worked on website and backend development for a startup that uses AI to help people with know more about Islam. I worked on the website and backend development using React, Next.js, and Node.js.'
		}
	];
</script>

<div class="w-full max-w-full" {...$root}>
	{#each items as { id, title, year, company, description }, i}
		<div use:melt={$item(id)} class="overflow-hidden border-b border-neutral-400 transition-colors">
			<h2 class="flex">
				<button
					use:melt={$trigger(id)}
					class="
              focus-visible:text-magnum-800 flex flex-1 cursor-pointer items-center
              justify-between px-3 py-2 text-base font-medium
              leading-none text-white transition-colors hover:bg-green-600
              focus:!ring-0
              {$isSelected(id) ? 'bg-green-700' : ''}
            "
				>
					<div class="flex items-center">
						<ChevronDownIcon
							class="h-6 w-6 {$isSelected(id)
								? '-rotate-90 transition-transform duration-150'
								: ''}"
						/>

						<h3 class="text-sm font-medium">{title}</h3>
					</div>
					<h3 class="text-sm font-medium">{company}</h3>
					<h3 class="text-sm font-medium text-neutral-100">{year}</h3>
				</button>
			</h2>
			{#if $isSelected(id)}
				<div
					class="
              content
              overflow-hidden text-sm text-white/90
            "
					use:melt={$content(id)}
					transition:slide
				>
					<div class="px-3 py-3">
						{description}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
