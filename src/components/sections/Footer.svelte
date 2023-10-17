<script lang="ts">
	import inspired from '../../data/inspired.json';
	let currentYear = new Date().getFullYear();
</script>

<footer class="font-inter py-8 font-[200] text-textPrimary">
	<div class="flex flex-col gap-3">
		<p class="">
			Designed by <a
				href="https://www.reddit.com/user/character_four/"
				target="_blank"
				class="font-[400] transition-all duration-300 hover:text-textAccent">Character Four</a
			>, and developed with passion by yours truly :). Crafted using
			<a
				href="https://kit.svelte.dev/"
				target="_blank"
				class="font-[400] transition-all duration-300 hover:text-textAccent">SvelteKit</a
			>,
			<a
				href="https://tailwindcss.com/"
				target="_blank"
				class="font-[400] transition-all duration-300 hover:text-textAccent">Tailwind CSS</a
			>, and proudly hosted on
			<a
				href="https://vercel.com"
				target="_blank"
				class="font-[400] transition-all duration-300 hover:text-textAccent">Vercel</a
			>
		</p>
		<div class="flex flex-wrap gap-1">
			<p class="">Inspired by the amazing works of:</p>
			<ul class="flex gap-1 font-[400]">
				{#each inspired as { name, url }}
					<li>
						<a href={url} target="_blank" class="transition-all duration-300 hover:text-textAccent">
							{name}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<p class="text-sm lg:text-base">
			All content is licensed under the <a
				href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
				target="_blank"
				class="underline">CC BY-NC-SA 4.0</a
			>
			license, from the year 2023 to present.
		</p>
		<p class="text-sm lg:text-base">&copy; {currentYear} Abdulhameed Mustapha</p>
	</div>
</footer>
