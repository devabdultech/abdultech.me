<script>
	import { onMount } from 'svelte';
	import About from './sections/About.svelte';
	import TechStack from './sections/TechStack.svelte';
	import Project from './sections/Project.svelte';
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

<section class="pt-10 lg:pt-24 lg:w-1/2 lg:py-24 font-space overflow-y-scroll scrollbar-hide">
	<About />
	<TechStack />
	<Project />

	{#if showArrow}
		<button
			title="Scroll to top"
			class="fixed bottom-0 right-0 mb-4 mr-4 p-2 rounded-full bg-white shadow-lg hover:scale-110 transition duration-300"
			on:click={scrollToTop}
		>
			<ArrowUpIcon size={18} />
		</button>
	{/if}
</section>
