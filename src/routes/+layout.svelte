<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import go from 'highlight.js/lib/languages/go';
	import python from 'highlight.js/lib/languages/python';
	import rust from 'highlight.js/lib/languages/rust';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('go', go);
	hljs.registerLanguage('python', python);
	hljs.registerLanguage('rust', rust);
	storeHighlightJs.set(hljs);
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<!-- <strong class="text-xl uppercase">Skeleton</strong> -->
				<Avatar
					src="https://avatars.githubusercontent.com/u/57568359?v=4"
					href="https://github.com/pkmollman"
					width="w-12"
					class="mr-4"
				/>
				<a href="https://github.com/pkmollman" class="text-primary-400 text-xl"> pkmollman </a>
				<div class="mx-4 text-error-400"><p>|</p></div>
				<a href="/" class="text-primary-400 text-xl"> home </a>
				<div class="mx-4 text-error-400"><p>|</p></div>
				<a href="/posts" class="text-primary-400 text-xl"> posts </a>
				<div class="mx-4 text-error-400"><p>|</p></div>
				<a href="https://github.com/pkmollman" class="text-primary-400 text-xl"> github </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
