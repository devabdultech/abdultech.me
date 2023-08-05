<script>
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
			>. The visual aesthetics were meticulously brought to life with creativity sparked from my
			imagination.
		</p>

		<div class="flex flex-wrap gap-1">
			<p class="">Inspired by the amazing works of:</p>
			<ul class="flex gap-1 font-[400]">
				<li>
					<a
						href="https://antfu.me/"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-colors duration-300 hover:text-textAccent">antfu.me</a
					>
				</li>
				<li>
					<a
						href="https://brittanychiang.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-colors duration-300 hover:text-textAccent">brittanychiang.com</a
					>
				</li>
				<li>
					<a
						href="https://www.trulyao.dev/"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-colors duration-300 hover:text-textAccent">trulyao.dev</a
					>
				</li>
			</ul>
		</div>

		<p class="">
			All content is licensed under the <a
				href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
				target="_blank"
				class="underline">CC BY-NC-SA 4.0</a
			>
			license, from the year 2023 to present.
		</p>
		<p class="">&copy; {currentYear} Abdulhameed Mustapha</p>
	</div>
</footer>
