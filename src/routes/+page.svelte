<script lang="ts">
	// import { onMount } from 'svelte';
	import type { ITransformedItem } from '../types.js';

	import Layout1 from '$lib/layout/main/Layout1.svelte';
    import Layout2 from '$lib/layout/main/Layout2.svelte';
    import Layout3 from '$lib/layout/main/Layout3.svelte';
    import Layout4 from '$lib/layout/main/Layout4.svelte';

	export let data
	const posts: ITransformedItem[] = data.props.data;
	const index = data.props.index;
	const layouts = [Layout1, Layout2, Layout3, Layout4];
	// const selectedLayout = layouts[index];
	const selectedLayout = layouts[0]

</script>

<svelte:head>
	<title>Die Zeit Clone</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

	<svelte:component this={selectedLayout} posts={posts} />

</section>

<style>

</style>
