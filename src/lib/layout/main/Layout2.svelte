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
	<div class="relative -mb-12">
		<a class="" target="_blank" rel="nofollow noopener" href={introPost.link} title={introPost.title}>
			<figure class="relative">
				<img width="1000" height="425" class="object-cover w-full max-h-[425px] bg-black/8" src={introPost.imageUrl} alt={introPost.title} />
			</figure>
		</a>
		
	</div>
	<div class="relative bg-white dark:bg-black/90 rounded-sm z-10 w-full shadow-md max-w-[60rem] mx-auto px-custom md:px-[3rem] py-[2rem]">
		<article class="relative">
			<a href={introPost.link} class="flex flex-col gap-3 md:max-w-[65%] text-black dark:text-white">
				<small class="font-bold text-accent100">{introPost.category}</small>
				<h2 class="font-bold text-3xl">{introPost.title}</h2>
				<p class="line-clamp-2">{introPost.description}</p>
				<small class="max-w-[75%]">Von {introPost.creator}</small>
			</a>
			<button class="absolute -bottom-6 md:bottom-0 right-0 z-10 hover:bg-bg10 focus-visible:bg-bg10 dark:hover:bg-bg10 transition-colors duration-300 p-2 rounded-md text-gray-400 dark:text-white" title="Artikel merken">
				<IconBookmark />
			</button>
		</article>

		<div class="flex flex-col md:flex-row gap-6 mt-6">
			{#each postsWithImageAndDescription as post, index (post.title)}
				{#if index < 2}
					<article class="bg-bgPrimary dark:bg-transparent text-black dark:text-white flex flex-colrelative">
						<a target="_blank" rel="nofollow noopener" href={post.link} class="relative flex flex-col gap-2 md:gap-5 ">
							<figure>
								<img class="max-h-[175px] w-full object-cover aspect-video" src={post.imageUrl} alt={post.title} />
							</figure>

							<div title={post.title} class="flex flex-col gap-3">
								<small class="text-accent100 font-bold">{post.category}</small>
								<h2 class="line-clamp-1 font-bold text-xl">{post.title}</h2>
								<p class="line-clamp-3">{post.description}</p>
								<small class="text-gray-500 max-w-[75%]">Von {post.creator}</small>
							</div>

							<button class="absolute -bottom-4 right-0 z-10 hover:bg-bg10 focus-visible:bg-bg10 dark:hover:bg-bg10 transition-colors duration-300 p-2 rounded-md text-gray-400 dark:text-white" title="Artikel merken">
								<IconBookmark />
							</button>
						</a>
					</article>
				{/if}
			{/each}

		</div>
	
	
	</div>
{/if}


	
<div class="flex flex-col gap-10 mt-custom py-custom max-w-[55rem] mx-auto">
	{#each postsWithImageAndDescription as post, index (post.title)}
	
		{#if index >= 2}
			<TwoColArticle {post} />
		{/if}
	{/each}

</div>


