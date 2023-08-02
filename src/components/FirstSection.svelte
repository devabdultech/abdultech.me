<script>
	import SocialCard from './SocialCard.svelte';
	import { goto } from '$app/navigation';
</script>

<section class="w-full lg:w-[50%] flex flex-col">
	<div class="flex flex-col gap-3">
		<a href="/" on:click={() => goto('/')}>
			<h1
				class="text-4xl font-bold tracking-tight text-textPrimary hover:cursor-pointer transition-colors duration-300 sm:text-5xl"
			>
				AbdulTech
			</h1>
		</a>
		<h3 class="mt-3 text-lg font-medium tracking-[0.4rem] text-slate-400 sm:text-xl uppercase">
			Software Developer
		</h3>

		<SocialCard />
	</div>
</section>
