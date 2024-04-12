<script>
	import { posts } from '$lib/posts';
	import PostLink from '$lib/core/PostLink.svelte';
</script>

<div class="w-8/12 m-auto">
	{#each posts as postentry}
		<PostLink {postentry} />
	{/each}
</div>
