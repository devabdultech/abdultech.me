<script>
	import SocialCard from './ui/SocialCard.svelte';
	import { goto } from '$app/navigation';
	import Button from './ui/Button.svelte';
</script>

<section class="w-full lg:sticky lg:top-0 lg:max-h-screen lg:pr-5">
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

		<Button />

		<div
			class="w-full h-[1px] mt-4 bg-gradient-to-r from-[#3ECF8E] from-0% to-[#0C131100] to-100% rounded-full"
		/>
	</div>
</section>
