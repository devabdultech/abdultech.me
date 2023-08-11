<script>
	import { goto } from '$app/navigation';
	import SocialCard from './ui/SocialCard.svelte';
	import Button from './ui/Button.svelte';
	import Nav from './ui/Nav.svelte';
	import SpotifyActivity from './ui/SpotifyActivity.svelte';
	import Abdultech from './ui/Abdultech.svelte';
</script>

<section
	class="font-space lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
>
	<div class="flex flex-col gap-3">
		<a href="/" on:click={() => goto('/')}>
			<Abdultech />
		</a>
		<h1 class="mt-3 text-lg font-medium uppercase tracking-[0.4rem] text-slate-400 sm:text-xl">
			Software Developer
		</h1>

		<SocialCard />

		<Button />

		<div
			class="mt-4 h-[1px] w-full rounded-full bg-gradient-to-r from-[#3ECF8E] from-0% to-[#0C131100] to-100%"
		/>

		<Nav />
	</div>
</section>
