<script>
	import { posts } from '$lib/posts';
	import PostLink from '$lib/core/PostLink.svelte';
</script>

<div class="w-8/12 m-auto">
	<h1 class="text-3xl text-center text-primary-400 mt-6 underline">HOME</h1>
	<h1 class="text-3xl text-center text-primary-400 mt-6 underline">test</h1>
	<h1 class="text-3xl text-center text-primary-400">Latest Post</h1>
	<PostLink postentry={posts[0]} />
</div>
