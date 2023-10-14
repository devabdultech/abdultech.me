<script lang="ts">
	import About from './sections/About.svelte';
	import TechStack from './sections/TechStack.svelte';
	import Project from './sections/Project.svelte';
	import Experience from './sections/Experience.svelte';
	import Thoughts from './sections/Thoughts.svelte';
	import SpotifyActivity from './ui/SpotifyActivity.svelte';
	import Footer from './sections/Footer.svelte';
</script>

<section class="font-space pt-10 lg:w-1/2 lg:py-24 lg:pt-24">
	<About />
	<TechStack />
	<Project />
	<Experience />
	<Thoughts />
	<SpotifyActivity />
	<Footer />
</section>
