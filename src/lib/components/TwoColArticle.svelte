<script>
    export let post
    import IconBookmark from '$lib/components/IconBookmark.svelte';
</script>

<article class="bg-bgPrimary text-black dark:text-white flex relative mx-custom">
    <a target="_blank" rel="nofollow noopener" href={post.link} class="relative flex flex-col md:flex-row gap-2 md:gap-5 ">
        <figure>
            <img class="min-h-[185px] w-full md:min-w-[300px] md:max-w-[300px] object-cover aspect-video" src={post.imageUrl} alt={post.title} />
        </figure>

        <div class="flex flex-col gap-4">
            <small class="text-accent100 font-bold">{post.category}</small>
            <h2 class="font-bold text-2xl">{post.title}</h2>
            <p class="line-clamp-2">{post.description}</p>
            <small class="text-gray-500">Von {post.creator}</small>
        </div>

        <button class="absolute -bottom-9 right-0 z-10 hover:bg-bg10 focus-visible:bg-bg10 dark:hover:bg-bg10 transition-colors duration-300 p-2 rounded-md text-gray-400 dark:text-white" aria-label="Artikel merken">
            <IconBookmark />
        </button>
    </a>
</article>