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

<section class="font-space overflow-y-scroll pt-10 scrollbar-hide lg:w-1/2 lg:py-24 lg:pt-24">
	<About />
	<TechStack />
	<Project />

	{#if showArrow}
		<button
			title="Scroll to top"
			class="fixed bottom-0 right-0 mb-4 mr-4 rounded-full bg-white p-2 shadow-lg transition duration-300 hover:scale-110"
			on:click={scrollToTop}
		>
			<ArrowUpIcon size={18} />
		</button>
	{/if}
</section>
