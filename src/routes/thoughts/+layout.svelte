<script lang="ts">
	let currentYear = new Date().getFullYear();
	import AbdulTechLogo from '../../components/ui/AbdulTechLogo.svelte';
	import SocialCard from '../../components/ui/SocialCard.svelte';
</script>

<main class="font-space flex h-full w-full flex-col gap-4 text-textPrimary">
	<nav class="flex w-full items-center justify-between py-0 lg:py-6">
		<a aria-label="AbdulTech Logo" href="/">
			<AbdulTechLogo />
		</a>
		<div class="flex items-center justify-center gap-3">
			<SocialCard />
		</div>
	</nav>
	<slot />
	<footer class="my-10 flex gap-2 text-sm lg:text-base">
		<p>
			<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" class="underline"
				>CC BY-NC-SA 4.0</a
			>
		</p>
		<p>&copy; {currentYear} Abdulhameed Mustapha</p>
	</footer>
</main>
