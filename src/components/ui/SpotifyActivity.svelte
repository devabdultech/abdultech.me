<script lang="ts">
	import { onMount } from 'svelte';
	import type { SpotifyData } from '$lib/types';

	let data: SpotifyData;

	onMount(async () => {
		const eventSource = new EventSource('/api/spotify');
		eventSource.onmessage = (event) => {
			data = JSON.parse(event.data);
			// console.log(data.item);
		};

		eventSource.onerror = (error) => {
			// console.log('Error receiving SSE stream:', error);
		};
	});
</script>

<div class="text-white">
	{#if data && data.item}
		<div class="flex flex-col gap-4">
			<a
				class="flex items-center justify-between"
				target="_blank"
				href="https://open.spotify.com/user/wgrj76kh7jdx0kss4ydqhn12i"
			>
				<h3 class="uppercase leading-relaxed">Listening to spotify</h3>
				<img class="h-8 w-8" src="/spotify.svg" alt="Spotify" />
			</a>

			<div class="flex h-20 w-full gap-4">
				<div class="h-full max-w-[80px] flex-shrink-0 overflow-hidden rounded-lg">
					<img
						class="h-full w-full object-cover"
						src={data.item.album.images[0].url}
						alt="Spotify"
					/>
				</div>

				<div class="flex w-full flex-col leading-relaxed">
					<a
						class="font-semibold hover:underline"
						href={data.item.external_urls.spotify}
						target="_blank">{data.item.name}</a
					>

					<h3>
						by {#each data.item.artists as artist, index}
							<a
								class="font-medium hover:underline"
								href={artist.external_urls.spotify}
								target="_blank">{artist.name}</a
							>{#if index < data.item.artists.length - 1},
							{/if}
						{/each}
					</h3>

					<h3>
						on <a
							class="font-medium hover:underline"
							href={data.item.album.external_urls.spotify}
							target="_blank">{data.item.album.name}</a
						>
					</h3>
				</div>
			</div>
		</div>
	{:else}
		<a
			class="flex items-center gap-4"
			target="_blank"
			href="https://open.spotify.com/user/wgrj76kh7jdx0kss4ydqhn12i"
		>
			<img class="h-8 w-8" src="/spotify.svg" alt="Spotify" />
			<h3>Spotify — Not playing</h3>
		</a>
	{/if}
</div>
