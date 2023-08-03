<!-- YourComponent.svelte -->
<script lang="ts">
	interface Props {
		name: string;
	}

	export let name: Props['name'];
</script>

<div
	class="flex items-center justify-start gap-2 lg:grayscale-[70%] lg:hover:grayscale-0 cursor-pointer px-1 py-2"
>
	<img alt={name} height="20" width="20" src={`https://cdn.simpleicons.org/${name}`} />
	<p class="text-sm font-medium">{name}</p>
</div>
