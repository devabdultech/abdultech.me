<script>
	import { SquareDashedBottomCodeIcon } from 'lucide-svelte';
	import ProjectCard from '../ui/ProjectCard.svelte';
	import projects from '../../data/projects.json';
</script>

<div
	id="projects"
	class="font-space mb-16 scroll-mt-16 text-textPrimary lg:min-h-screen lg:scroll-mt-24"
>
	<h1 class="font-inter mb-4 flex items-center gap-2 text-2xl font-bold uppercase lg:text-3xl">
		What I've built <SquareDashedBottomCodeIcon />
	</h1>
	<p class="text-lg font-[300] leading-relaxed text-textPrimary">
		My main focus these days is dreaming up, creating and working on ideas I find interesting, that
		is what gives me the utmost joy. Despite challenges, I persistently learn and explore to bring
		these visions to life. Also, drawing inspiration from talented developers. I proudly present a
		collection of projects that have sparked my interest and consumed my passion, I hope you love
		them :)
	</p>

	<div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-2">
		{#each projects as project (project.id)}
			<ProjectCard
				name={project.name}
				description={project.description}
				image_src={project.image_src}
				github_url={project.github_url}
				website_url={project.website_url}
				tech_stack={project.tech_stack}
			/>
		{/each}
	</div>
</div>
