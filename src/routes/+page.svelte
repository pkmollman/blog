<script>
	import { posts } from '$lib/posts';
	import PostLink from '$lib/core/PostLink.svelte';
</script>

<div class="w-8/12 m-auto">
	<p>Random text</p>
	<h1 class="text-3xl text-center text-primary-400">Latest Post</h1>
	<PostLink postentry={posts[0]} />
</div>
