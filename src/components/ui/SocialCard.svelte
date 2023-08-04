<script>
	import socials from '../../data/socials.json';
</script>

<div class="mt-4 flex gap-4">
	{#each socials as social (social.id)}
		<a href={social.url} target="_blank" class="text-md font-medium">
			<img alt={social.name} height="20" width="20" src={`https://cdn.simpleicons.org/${social.name}/white`} />
		</a>
	{/each}
</div>
