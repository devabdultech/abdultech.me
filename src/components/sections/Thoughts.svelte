<script>
	import BlogCards from '../ui/BlogCards.svelte';
</script>

<div
	id="thoughts"
	class="font-space mb-16 scroll-mt-16 text-textPrimary lg:min-h-screen lg:scroll-mt-24"
>
	<h1 class="font-inter mb-4 flex items-center gap-2 text-2xl font-bold uppercase lg:text-3xl">
		Thoughts | Blog
	</h1>
	<p class="text-lg font-[300] leading-relaxed text-textPrimary">
		Step into the realm of my musings, where thoughts intertwine with experiences, ideas dance with
		visions, and interests converge in a symphony of exploration.
	</p>

	<div class="mt-12 flex flex-col gap-y-6">
		<BlogCards />
		<BlogCards />
		<BlogCards />
	</div>
</div>
