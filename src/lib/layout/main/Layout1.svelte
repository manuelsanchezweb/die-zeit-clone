<script>
	import { page } from '$app/stores';
	import imgPolitics from '$lib/images/polarisierung-demonstrationen-gegen-rechts-afd-demokratie-bild.jpeg';
	import IconBookmark from '$lib/components/IconBookmark.svelte';
	import TwoColArticle from '$lib/components/TwoColArticle.svelte';
	export let posts

	const introPost = posts.reduce((selected, post) => {
		if (post.imageUrl && post.description && (!selected || new Date(post.pubDate) > new Date(selected.pubDate))) {
			return post;
		}
		return selected;
	}, null);

    const remainingPosts = posts.filter(post => post.link !== introPost.link);
	const uniquePostIds = new Set();

	const postsWithImageAndDescription = remainingPosts.filter(post => {
		const isUnique = !uniquePostIds.has(post.link);
		if (post.imageUrl && post.description && isUnique) {
			uniquePostIds.add(post.link);
			return true;
		}
		return false;
	});
	const postsWithOnlyImage = remainingPosts.filter(post => post.imageUrl && !post.description);
	const postsWithNoImage = remainingPosts.filter(post => !post.imageUrl);
</script>

<!-- Intro Component - Bild with Link  -->
{#if introPost}
	<a target="_blank" rel="nofollow noopener" href={introPost.link} title={introPost.title}>
		<figure class="relative">
			<img width="1000" height="425" class="object-cover w-full max-h-[425px] bg-black/8" src={introPost.imageUrl} alt={introPost.title} />
	
			<button class="absolute bottom-2 right-3 z-10 hover:bg-bg10 focus-visible:bg-bg10 dark:hover:bg-bg10 transition-colors duration-300 p-2 rounded-md text-white hover:text-black focus-visible:text-black" title="Artikel merken">
				<IconBookmark />
			</button>
			<div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent"></div>
			<figcaption class="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10 flex flex-col gap-3 md:max-w-[65%] text-white">
				<small class="[text-shadow:_2px_3px_10px_rgb(0_0_0_/_40%)] font-bold">{introPost.category}</small>
				<h2 class="[text-shadow:_2px_3px_10px_rgb(0_0_0_/_40%)] font-bold text-xl md:text-3xl">{introPost.title}</h2>
				<p class="[text-shadow:_2px_3px_10px_rgb(0_0_0_/_40%)] hidden md:block line-clamp-2">{introPost.description}</p>
				<small class="[text-shadow:_2px_3px_10px_rgb(0_0_0_/_40%)]">Von {introPost.creator}</small>
			</figcaption>

		</figure>
	</a>
{/if}
	
<div class="flex flex-col gap-12 mt-custom py-custom max-w-[55rem] mx-auto">
	{#each postsWithImageAndDescription as post, index (post.title)}
		{#if index < 3}
			<TwoColArticle {post} />
		{/if}
		{#if index === 3}
			<article class="bg-bgPrimary text-black dark:text-white flex relative mx-custom">
				<a target="_blank" rel="nofollow noopener" href={post.link} class="relative flex flex-col gap-2 md:gap-3 ">
					<div class="flex flex-col gap-2">
						<small class="text-accent100 font-bold">{post.category}</small>
						<h2 class="font-bold text-2xl">{post.title}</h2>
					</div>
					<figure>
						<img class="max-h-[330px] w-full object-cover" src={post.imageUrl} alt={post.title} />
					</figure>

					<div class="flex flex-col md:flex-row gap-3 items-start justify-between md:divide-x my-2">
						<p class="text-balance md:max-w-[70%]">{post.description}</p>
						<small class="text-gray-500 pr-5 md:px-5">Von {post.creator}</small>
					</div>

					<button class="absolute -bottom-9 right-0 z-10 hover:bg-bg10 focus-visible:bg-bg10 dark:hover:bg-bg10 transition-colors duration-300 p-2 rounded-md text-gray-400 dark:text-white" title="Artikel merken">
						<IconBookmark />
					</button>
				</a>
			</article>
		{/if}
		{#if index >= 4}
			<TwoColArticle {post} />
		{/if}
	{/each}

</div>


