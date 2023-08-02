<script>
	import '../styles/app.css';
	import FirstSection from '../components/FirstSection.svelte';
	import SecondSection from '../components/SecondSection.svelte';
</script>

<svelte:head>
	<title>AbdulTech</title>
</svelte:head>

<main class="w-full h-full flex flex-col p-5 lg:flex-row lg:px-24 lg:py-32 text-textPrimary">
	<FirstSection />
	<SecondSection />
</main>
