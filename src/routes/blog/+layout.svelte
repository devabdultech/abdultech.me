<script>
	import SocialCard from '../../components/ui/SocialCard.svelte';
</script>

<main class="font-space flex h-full w-full flex-col gap-4 text-textPrimary">
	<nav class="flex items-center justify-between py-0 lg:py-6">
		<a href="/">Logo</a>
		<div class="flex items-center justify-center gap-3">
			<SocialCard />
		</div>
	</nav>
	<slot />
</main>
