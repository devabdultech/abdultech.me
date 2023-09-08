<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let currentTime: string;

	const displayTime = () => {
		const timeZone: string = 'Africa/Lagos';

		const updateTime = () => {
			currentTime = new Date().toLocaleTimeString('en-US', { timeZone });
		};

		updateTime();

		const intervalId = setInterval(updateTime, 1000);
	};

	onMount(displayTime);
</script>

<p class="text-lg text-green-400">Current time: {currentTime}</p>
