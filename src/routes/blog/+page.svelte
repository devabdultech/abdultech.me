<script>
	import { ArrowUpRightIcon, DotIcon } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Blog - AbdulTech</title>
</svelte:head>

<div class="flex max-w-5xl flex-col gap-4">
	<div class="flex flex-col gap-3">
		<h1 class="font-inter text-xl font-[500] md:text-2xl lg:text-2xl">Blog/Thoughts</h1>
		<div class="font-space flex flex-col gap-1 text-base md:text-lg">
			<p>
				Enter my world of thoughts and experiences, where ideas twirl with visions, and passions
				come together in an eclectic exploration. Join me on this journey into the realm of
				curiosity and discovery.
			</p>
			<p>
				<span class="text-textAccent">Why are we embarking on this? </span> I can't quite put my finger
				on it, but here's an invitation nonetheless :}
			</p>
		</div>
	</div>

	<div class="mt-6 flex flex-col gap-6">
		<div class="flex w-full items-center gap-3">
			<div
				class="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-teal-600 lg:h-24 lg:w-24 lg:p-5"
			>
				<h1 class="tebase-lg font-bold lg:text-xl">02</h1>
				<p class="text-center text-sm font-medium text-textPrimary">September, 2023</p>
			</div>
			<div class="relative w-5/6 border-l border-l-textAccent py-3 pl-4">
				<div class="absolute -left-1.5 top-0 aspect-square w-3 rounded-full bg-textAccent" />
				<a href="/blog/my-first-blog" class="group transition-all">
					<div class="flex gap-2 text-xl font-semibold transition-transform">
						<span>My first blog :)</span>
						<ArrowUpRightIcon
							size={16}
							class="transform duration-200 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
						/>
						<span class="flex items-center text-xs text-textPrimary/50"><DotIcon /> 10min</span>
					</div>
					<p
						class="mt-2 max-w-xs truncate text-sm font-medium leading-relaxed text-textPrimary/70 lg:mt-1"
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ad cupiditate provident
						fugit, odio deleniti recusandae soluta nihil temporibus nemo, esse minus enim a sint
						voluptates, corrupti commodi magni illum.
					</p>
					<div class="absolute -left-1.5 bottom-0 aspect-square w-3 rounded-full bg-textAccent" />
				</a>
			</div>
		</div>

		<div class="flex w-full items-center gap-3">
			<div
				class="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-teal-600 lg:h-24 lg:w-24 lg:p-5"
			>
				<h1 class="text-base font-bold lg:text-xl">09</h1>
				<p class="text-center text-sm font-medium text-textPrimary">December, 2023</p>
			</div>
			<div class="relative w-5/6 border-l border-l-textAccent py-3 pl-4">
				<div class="absolute -left-1.5 top-0 aspect-square w-3 rounded-full bg-textAccent" />
				<a href="/blog/my-second-blog" class="group transition-all">
					<div class="flex gap-2 text-xl font-semibold transition-transform">
						<span>My second blog :)</span>
						<ArrowUpRightIcon
							size={16}
							class="transform duration-200 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
						/>
						<span class="flex items-center text-xs text-textPrimary/50"><DotIcon /> 10min</span>
					</div>
					<p
						class="mt-2 max-w-xs truncate text-sm font-medium leading-relaxed text-textPrimary/70 lg:mt-1"
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ad cupiditate provident
						fugit, odio deleniti recusandae soluta nihil temporibus nemo, esse minus enim a sint
						voluptates, corrupti commodi magni illum.
					</p>
					<div class="absolute -left-1.5 bottom-0 aspect-square w-3 rounded-full bg-textAccent" />
				</a>
			</div>
		</div>

		<div class="flex w-full items-center gap-3">
			<div
				class="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-teal-600 lg:h-24 lg:w-24 lg:p-5"
			>
				<h1 class="text-base font-bold lg:text-xl">01</h1>
				<p class="text-center text-sm font-medium text-textPrimary">January, 2024</p>
			</div>
			<div class="relative w-5/6 border-l border-l-textAccent py-3 pl-4">
				<div class="absolute -left-1.5 top-0 aspect-square w-3 rounded-full bg-textAccent" />
				<a href="/blog/my-fifth-blog" class="group transition-all">
					<div class="flex gap-2 text-xl font-semibold transition-transform">
						<span>My fifth blog :)</span>
						<ArrowUpRightIcon
							size={16}
							class="transform duration-200 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
						/>
						<span class="flex items-center text-xs text-textPrimary/50"><DotIcon /> 10min</span>
					</div>
					<p
						class="mt-2 max-w-xs truncate text-sm font-medium leading-relaxed text-textPrimary/70 lg:mt-1"
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ad cupiditate provident
						fugit, odio deleniti recusandae soluta nihil temporibus nemo, esse minus enim a sint
						voluptates, corrupti commodi magni illum.
					</p>
					<div class="absolute -left-1.5 bottom-0 aspect-square w-3 rounded-full bg-textAccent" />
				</a>
			</div>
		</div>

		<div class="flex w-full items-center gap-3">
			<div
				class="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-teal-600 lg:h-24 lg:w-24 lg:p-5"
			>
				<h1 class="text-base font-bold lg:text-xl">14</h1>
				<p class="text-center text-sm font-medium text-textPrimary">January, 2024</p>
			</div>
			<div class="relative w-5/6 border-l border-l-textAccent py-3 pl-4">
				<div class="absolute -left-1.5 top-0 aspect-square w-3 rounded-full bg-textAccent" />
				<a href="/blog/my-fourth-blog" class="group transition-all">
					<div class="flex gap-2 text-xl font-semibold transition-transform">
						<span>My fourth blog :)</span>
						<ArrowUpRightIcon
							size={16}
							class="transform duration-200 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
						/>
						<span class="flex items-center text-xs text-textPrimary/50"><DotIcon /> 10min</span>
					</div>
					<p
						class="mt-2 max-w-xs truncate text-sm font-medium leading-relaxed text-textPrimary/70 lg:mt-1"
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ad cupiditate provident
						fugit, odio deleniti recusandae soluta nihil temporibus nemo, esse minus enim a sint
						voluptates, corrupti commodi magni illum.
					</p>
					<div class="absolute -left-1.5 bottom-0 aspect-square w-3 rounded-full bg-textAccent" />
				</a>
			</div>
		</div>

		<div class="flex w-full items-center gap-3">
			<div
				class="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-teal-600 lg:h-24 lg:w-24 lg:p-5"
			>
				<h1 class="text-base font-bold lg:text-xl">03</h1>
				<p class="text-center text-sm font-medium text-textPrimary">March, 2024</p>
			</div>
			<div class="relative w-5/6 border-l border-l-textAccent py-3 pl-4">
				<div class="absolute -left-1.5 top-0 aspect-square w-3 rounded-full bg-textAccent" />
				<a href="/blog/my-third-blog" class="group transition-all">
					<div class="flex gap-2 text-xl font-semibold transition-transform">
						<span>My fifth blog :)</span>
						<ArrowUpRightIcon
							size={16}
							class="transform duration-200 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
						/>
						<span class="flex items-center text-xs text-textPrimary/50"><DotIcon /> 10min</span>
					</div>
					<p
						class="mt-2 max-w-xs truncate text-sm font-medium leading-relaxed text-textPrimary/70 lg:mt-1"
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ad cupiditate provident
						fugit, odio deleniti recusandae soluta nihil temporibus nemo, esse minus enim a sint
						voluptates, corrupti commodi magni illum.
					</p>
					<div class="absolute -left-1.5 bottom-0 aspect-square w-3 rounded-full bg-textAccent" />
				</a>
			</div>
		</div>
	</div>
</div>
