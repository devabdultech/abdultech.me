<script>
	import '../styles/app.css';
	import { onMount } from 'svelte';
	import { ArrowUpIcon } from 'lucide-svelte';

	let showArrow = false;

	onMount(() => {
		window.addEventListener('scroll', () => {
			const threshold = 250;
			showArrow = window.scrollY > threshold;
		});
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<main>
	<div class="max-w-screen-3xl mx-auto min-h-screen px-4 py-16 md:px-12 md:py-20 lg:px-24 lg:py-0">
		<slot />
	</div>

	{#if showArrow}
		<button
			title="Scroll to top"
			class="fixed bottom-0 right-0 mb-4 mr-4 rounded-full bg-white p-2 shadow-lg transition duration-300 hover:scale-110"
			on:click={scrollToTop}
		>
			<ArrowUpIcon size={18} />
		</button>
	{/if}
</main>
