<script>
	import SimplePost from '$lib/core/SimplePost.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<SimplePost PostTitle="Init" TimeStamp="2024-04-10">
	<p>
		This is some testing content to get my site up and running with basic things I think I'll need
	</p>
	<p>This is a code block:</p>
	<CodeBlock
		language="go"
		code={`
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
        `}
	/>
</SimplePost>
