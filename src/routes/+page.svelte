<script lang="ts">
	import { page } from '$app/stores';
	import FirstSection from '../components/FirstSection.svelte';
	import SecondSection from '../components/SecondSection.svelte';


</script>

<svelte:head>
	<title>AbdulTech</title>
	<meta
		name="description"
		content="Welcome to AbdulTech's personal site. Abdulhameeed is a self-taught software developer with great passion and love for what he does. He's interested in building helpful, accessible tools, sites and web expereinces for people to use and enjoy"
	/>
	<meta
		property="og:description"
		content="Welcome to AbdulTech's personal site. Abdulhameeed is a self-taught software developer with great passion and love for what he does. He's interested in building helpful, accessible tools,sites and web expereinces for people to use and enjoy"
	/>
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:title" content="AbdulTech" />
</svelte:head>

<div class="lg:flex lg:justify-between lg:gap-4">
	<!-- First section -->
	<FirstSection />

	<!-- Second section -->
	<SecondSection />
</div>
