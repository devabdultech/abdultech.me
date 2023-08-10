<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}: {$page.error?.message}</title>
	<meta name="description" content="Oops page not found. Nice to see you here thou :)" />
	<meta property="og:description" content="Oops page not found. Nice to see you here thou :)" />
</svelte:head>

<div class="mx-auto mt-8 flex max-h-screen flex-col items-center justify-center text-textPrimary">
	<h1 class="font-inter text-3xl font-bold">{$page.status}: {$page.error?.message}</h1>
	<p class="mt-4 text-center text-xl text-textAccent">
		Oops page not found. Nice to see you here thou :)
	</p>
	<div class="mt-5 max-w-[500px]">
		<img class="w-full" src="/404-gif.gif" alt="404 Gif" />
	</div>
	<p><a href="https://giphy.com/gifs/computer-reddit-bPCwGUF2sKjyE">via GIPHY</a></p>
	<div class="mt-6">
		<a class="text-xl font-semibold text-textAccent" href="/"> [Home] </a>
	</div>
</div>
