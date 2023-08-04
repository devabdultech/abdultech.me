<script lang="ts">
	interface Props {
		name: string;
		title: string;
		from: number | string;
		to: number | string;
		color?: string;
	}

	export let name: Props['name'];
	export let title: Props['title'];
	export let from: Props['from'];
	export let to: Props['to'];
	export let color: Props['color'];
</script>

<div class="flex items-center justify-between gap-3">
	<div class="flex items-center gap-10">
		<div class="h-10 w-10 rounded-lg border p-2">
			{#if color}
				<img
					alt={name}
					height="22"
					width="22"
					src={`https://cdn.simpleicons.org/${name}/${color}`}
				/>
			{:else}
				<img alt={name} height="24" width="24" src={`https://cdn.simpleicons.org/${name}`} />
			{/if}
		</div>

		<div class="flex flex-col">
			<p class="text-lg font-[400] tracking-wide">{title}</p>
			<p class="">{name}</p>
		</div>
	</div>

	<div class="flex gap-1">
		<span class="text-base">{from}</span> - <span class="text-base">{to}</span>
	</div>
</div>
