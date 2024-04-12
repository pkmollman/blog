<script lang="ts">
	import type { Post } from '$lib/posts';
	export let postentry: Post;
</script>

<a href={postentry.Link}>
	<div class="p-6 variant-ringed-surface my-6 rounded-xl">
		<h1 class="h2 text-center text-primary-400">{postentry.Title}</h1>
		<p class="text-right text-primary-500">{postentry.TimeStamp}</p>
	</div>
</a>
