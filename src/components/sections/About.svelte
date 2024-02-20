<script lang="ts">
	import { onMount } from 'svelte';
	import { Confetti } from 'svelte-confetti';

	function calculateAge(dateOfBirth: string) {
		const dob = new Date(dateOfBirth);
		const currentDate = new Date();
		let age = currentDate.getFullYear() - dob.getFullYear();
		const month = currentDate.getMonth() - dob.getMonth();

		if (month < 0 || (month === 0 && currentDate.getDate() < dob.getDate())) {
			age--;
		}

		return age;
	}

	const myAge = calculateAge('2005-12-09');

	const isBirthday = () => {
		const currentDate = new Date();
		const birthday = new Date(currentDate.getFullYear(), 11, 9);

		return (
			currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() === birthday.getDate()
		);
	};

	let showConfetti: boolean = false;
	let hoverConfetti: boolean = false;

	onMount(() => {
		if (isBirthday()) {
			showConfetti = true;
		}
	});
</script>

{#if showConfetti || hoverConfetti}
	<div
		class="pointer-events-none fixed left-0 top-[-50px] flex h-screen w-screen justify-center overflow-hidden"
	>
		<Confetti
			x={[-5, 5]}
			y={[0, 0.1]}
			delay={[0, 5000]}
			infinite={false}
			size={15}
			duration={5000}
			amount={150}
			fallDistance="100vh"
		/>
	</div>
{/if}

<div
	id="about"
	class="font-space mb-16 scroll-mt-16 text-textPrimary lg:min-h-screen lg:scroll-mt-24"
>
	<h1 class="font-inter mb-4 text-2xl font-bold tracking-wide lg:text-3xl">
		Hey there, I'm Abdulhameed! 👋
	</h1>

	<div
		class="slide-enter-content font-space flex flex-col gap-y-3 text-lg font-[300] leading-relaxed text-textPrimary"
	>
		<p>
			I'm an <span
				role="button"
				on:mouseenter={() => {
					if (isBirthday()) showConfetti = true;
				}}
				on:mouseleave={() => {
					if (isBirthday()) showConfetti = false;
				}}
				on:click={() => {
					if (isBirthday()) showConfetti = true;
				}}
				on:keydown={(event) => {
					if (event.key === 'Enter' && isBirthday()) showConfetti = true;
				}}
				tabindex="0"
				class="cursor-pointer font-bold text-textAccent hover:underline">{myAge}</span
			>

			year old self-taught developer currently studying
			<a
				href="https://en.wikipedia.org/wiki/Computer_science"
				target="_blank"
				class="cursor-laptop text-textAccent transition duration-200 hover:underline"
			>
				cs
			</a>
			from Nigeria. I love diving into various tools,
			<a
				href="https://en.wikipedia.org/wiki/Programming_language"
				target="_blank"
				class="text-textAccent">programming languages</a
			>
			and
			<a
				href="https://en.wikipedia.org/wiki/Application_framework"
				target="_blank"
				class="text-textAccent">frameworks</a
			> to expand my knowledge and skills.
		</p>

		<p>
			Being a
			<a
				href="https://en.wikipedia.org/wiki/Software_engineer"
				target="_blank"
				class="text-textAccent">developer</a
			>
			is not just a job for me; it's a way of life. I'm always exploring new ideas and experimenting
			with different technologies. I always strive to push the boundaries and improve my craft. I aim
			for <span class="text-textAccent">greatness</span> in everything I create.
		</p>

		<p>
			When the night comes, you'll often find me enthusiastically learning how to write the best
			software possible and optimizing it to run even better. The thrill of making
			<a
				href="https://en.wikipedia.org/wiki/Computer_software"
				target="_blank"
				class="text-textAccent">software</a
			>
			more efficient and effective keeps me going.
		</p>

		<p>
			Still exploring the world of
			<a href="https://en.wikipedia.org/wiki/Open_source" target="_blank" class="text-textAccent"
				>open source,</a
			> and I'm eager to contribute to cool and helpful projects ✨
		</p>
	</div>
</div>
