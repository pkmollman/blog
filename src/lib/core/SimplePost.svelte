<script>
	export let PostTitle = 'Page Title';
	export let TimeStamp = '0000-00-00';
</script>

<div class="w-8/12 m-auto">
	<div class="p-6 variant-ringed-surface my-6 rounded-xl">
		<h1 class="h2 text-center text-primary-400">{PostTitle}</h1>
		<p class="text-right text-primary-500">{TimeStamp}</p>
	</div>
	<slot />
</div>
