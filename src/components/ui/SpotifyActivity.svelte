<script lang="ts">
	import { onMount } from 'svelte';
	import type { SpotifyData } from '$lib/types';

	let responseData: any;

	async function fetchData() {
		try {
			const response = await fetch('/api/spotify');
			if (response.ok) {
				const data = await response.json();
				responseData = data;
				console.log('Data fetched successfully:', responseData);
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
	{#if responseData && responseData.data}
		<p>Music name: {responseData.data.item.name}</p>
	{:else}
		<p>No data available.</p>
	{/if}
</div>
