<script lang="ts">
	function updateActiveLink() {
		const currentFragment = window.location.hash;
		const navLinks = document.querySelectorAll('.nav-link');

		navLinks.forEach((link) => {
			if (link.getAttribute('href') === currentFragment) {
				link.classList.add('active');

				console.log(link);
			} else {
				link.classList.remove('active');
			}
		});
	}

	// Initial update
	updateActiveLink();

	// Update on hash change
	window.addEventListener('hashchange', updateActiveLink);
</script>

<nav class="hidden lg:block" aria-label="In-page jump links">
	<ul class="mt-5 flex space-x-4">
		<li>
			<a class="nav-link group flex items-center py-3" href="#about">
				<span
					class="text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-teal-300 group-focus-visible:text-teal-300"
					>About</span
				>
			</a>
		</li>
		<li>
			<a class="nav-link group flex items-center py-3" href="#stack">
				<span
					class="text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-teal-300 group-focus-visible:text-teal-300"
					>Tech stack</span
				>
			</a>
		</li>
		<li>
			<a class="nav-link group flex items-center py-3" href="#projects">
				<span
					class="text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-teal-300 group-focus-visible:text-teal-300"
					>Projects</span
				>
			</a>
		</li>
		<li>
			<a class=" nav-link group flex items-center py-3" href="#experience">
				<span
					class="text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-teal-300 group-focus-visible:text-teal-300"
					>Experience</span
				>
			</a>
		</li>
		<li>
			<a class=" nav-link group flex items-center py-3" href="#thoughts">
				<span
					class="text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-teal-300 group-focus-visible:text-teal-300"
					>Thoughts</span
				>
			</a>
		</li>
	</ul>
</nav>
