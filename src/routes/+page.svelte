<!-- YourPage.svelte -->
<script>
	import '../styles/app.css';
	import FirstSection from '../components/FirstSection.svelte';
	import SecondSection from '../components/SecondSection.svelte';
</script>

<svelte:head>
	<title>AbdulTech</title>
</svelte:head>

<main
	class="w-full flex flex-col p-3 lg:px-24 lg:py-32 text-textPrimary mx-auto min-h-screen max-w-screen-xl md:px-12 md:py-20"
>
	<div class="lg:flex lg:justify-between lg:gap-4">
		<div class="lg:w-1/2 lg:sticky lg:top-0 lg:pr-5">
			<!-- First section -->
			<FirstSection />
		</div>
		<div class="lg:w-1/2">
			<!-- Second section -->
			<SecondSection />
		</div>
	</div>
</main>
