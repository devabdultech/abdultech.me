<script>
	import SocialCard from './ui/SocialCard.svelte';
	import { goto } from '$app/navigation';
	import Button from './ui/Button.svelte';
</script>

<section
	class="font-space lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
>
	<div class="flex flex-col gap-3">
		<a href="/" on:click={() => goto('/')}>
			<h1
				class="font-inter text-4xl font-bold tracking-tight text-textPrimary transition-colors duration-300 hover:cursor-pointer sm:text-5xl"
			>
				AbdulTech
			</h1>
		</a>
		<h3 class="mt-3 text-lg font-medium uppercase tracking-[0.4rem] text-slate-400 sm:text-xl">
			Software Developer
		</h3>

		<SocialCard />

		<Button />

		<div
			class="mt-4 h-[1px] w-full rounded-full bg-gradient-to-r from-[#3ECF8E] from-0% to-[#0C131100] to-100%"
		/>

		<nav class="hidden lg:block" aria-label="In-page jump links">
			<ul class="mt-8 w-max">
				<li>
					<a class="active group flex items-center py-3" href="#about"
						><span
							class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
						/><span
							class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
							>About</span
						></a
					>
				</li>
				<li>
					<a class="group flex items-center py-3" href="#stack"
						><span
							class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
						/><span
							class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
							>Tech stack</span
						></a
					>
				</li>
				<li>
					<a class="group flex items-center py-3" href="#projects"
						><span
							class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
						/><span
							class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
							>Projects</span
						></a
					>
				</li>
				<li>
					<a class="active group flex items-center py-3" href="#experience"
						><span
							class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
						/><span
							class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
							>Experience</span
						></a
					>
				</li>
			</ul>
		</nav>
	</div>
</section>
