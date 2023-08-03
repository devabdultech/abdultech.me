<!-- YourPage.svelte -->
<script>
	import '../styles/app.css';
	import FirstSection from '../components/FirstSection.svelte';
	import SecondSection from '../components/SecondSection.svelte';
</script>

<svelte:head>
	<title>AbdulTech</title>
</svelte:head>

<main class="relative">
	<div
		class="mx-auto min-h-screen max-w-screen-3xl px-4 py-8 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
	>
		<div class="lg:flex lg:justify-between lg:gap-4">
			<!-- First section -->
			<FirstSection />

			<!-- Second section -->
			<SecondSection />
		</div>
	</div>
</main>
