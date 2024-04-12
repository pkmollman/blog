<script>
	import { posts } from '$lib/posts';
	import PostLink from '$lib/core/PostLink.svelte';
</script>

<div class="w-8/12 m-auto">
	<h1 class="text-3xl text-center text-primary-400 mt-6">HOME</h1>
	<div class="border-t border-primary-400 my-6"></div>
	<p class="text-center text-lg text-primary-300">
		Here is where I will (hopefully) post about things I'm working on, things I'm learning, and
		things I'm thinking about.
	</p>
	<div class="border-t border-primary-400 my-6"></div>
	<h1 class="text-3xl text-center text-primary-400">Latest Post</h1>
	<PostLink postentry={posts[0]} />
</div>

<style>
	p {
		/* font-size: 1.25rem; */
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
</style>
