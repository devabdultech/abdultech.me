<script lang="ts">
	import { onMount } from 'svelte';
	import type { SpotifyData } from '$lib/types';

	let data: SpotifyData;

	async function fetchData() {
		try {
			const response = await fetch('/api/spotify');
			if (response.ok) {
				data = await response.json();
				console.log('Data fetched successfully:', data);
			} else {
				console.error('Failed to fetch data:', response.statusText);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}

	onMount(() => {
		fetchData();
	});
</script>

<div class="text-white">
	{#if data && data.item}
		<p>Music name: {data.item.name}</p>
	{:else}
		<p>Nothing is playing</p>
	{/if}
</div>
