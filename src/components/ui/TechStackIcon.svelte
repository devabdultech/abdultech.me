<script lang="ts">
	interface Props {
		name: string;
	}

	export let name: Props['name'];
</script>

<div class="flex cursor-pointer items-center justify-start gap-2 px-1 py-2 lg:grayscale-[70%] lg:hover:grayscale-0">
	<img alt={name} height="22" width="22" src={`https://cdn.simpleicons.org/${name}`} />
	<p class="text-md font-[400] tracking-wide">{name}</p>
</div>
