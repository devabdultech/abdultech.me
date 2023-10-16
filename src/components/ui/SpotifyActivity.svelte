<script lang="ts">
	import { onMount } from 'svelte';
	import type { SpotifyData } from '$lib/types';

	let data: SpotifyData;

	async function fetchData() {
		try {
			const response = await fetch('/api/spotify');
			if (response.ok) {
				data = await response.json();
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
		<div class="flex flex-col gap-4 ">
			<a class="flex items-center justify-between" target="_blank" href="https://open.spotify.com/user/wgrj76kh7jdx0kss4ydqhn12i">
				<h3 class="uppercase leading-relaxed">Listening to spotify</h3>
				<img class="w-8 h-8" src="/spotify.svg" alt="Spotify" />
				
			</a>

			<div class="flex gap-4 w-full h-20">
				<div class="max-w-[80px] h-full rounded-lg overflow-hidden flex-shrink-0">
					<img class="w-full h-full object-cover" src={data.item.album.images[0].url} alt="Spotify" />
				</div>
				
				<div class="flex flex-col leading-relaxed w-full">
					<a class="hover:underline font-semibold" href={data.item.external_urls.spotify} target="_blank">{data.item.name}</a>

					<h3>by {#each data.item.artists as artist, index}
						<a class="hover:underline" href={artist.external_urls.spotify} target="_blank">{artist.name}</a>{#if index < data.item.artists.length - 1}, {/if}
					{/each}</h3>
					
					<h3>on <a class="hover:underline" href={data.item.album.external_urls.spotify} target="_blank">{data.item.album.name}</a></h3>
				</div>
			</div>

			
		</div>
	{:else}
		<a class="flex items-center gap-4" target="_blank" href="https://open.spotify.com/user/wgrj76kh7jdx0kss4ydqhn12i">
			<img class="w-8 h-8" src="/spotify.svg" alt="Spotify" />
			<h3>Spotify — Not playing</h3>
		</a>
	{/if}
</div>
