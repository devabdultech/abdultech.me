<!-- YourPage.svelte -->
<script>
	import '../styles/app.css';
	import FirstSection from '../components/FirstSection.svelte';
	import SecondSection from '../components/SecondSection.svelte';
</script>

<svelte:head>
	<title>AbdulTech</title>
</svelte:head>

<main class="w-full flex flex-col p-5 lg:px-24 lg:py-32 text-textPrimary">
	<div class="lg:flex lg:flex-row">
		<div class="lg:w-1/2 lg:pr-5">
			<!-- First section -->
			<FirstSection />
		</div>
		<div class="lg:w-1/2">
			<!-- Second section -->
			<SecondSection />
		</div>
	</div>
</main>
