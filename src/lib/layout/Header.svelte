<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import zeitOnline from '$lib/images/zeit-online.svg';
	import LogoZeitOnline from '$lib/components/LogoZeitOnline.svelte';

</script>

<header class="scale-100">
	<div class="max-w-full mx-auto ">
		<div class="nav__area flex justify-between items-center py-2">
			<!-- Menu  -->
			<button class="flex items-center space-x-4 hover:bg-bg10 focus-visible:bg-bg10 group transition-colors duration-300 p-2 rounded-md">
				<svg class="h-6 w-6 dark:text-white group-hover:dark:text-black group-focus-visible:dark:text-black"  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"  aria-hidden="true"><path fill-rule="evenodd" fill="currentColor" d="M1 8.25h16v1.5H1zM1 3.25h16v1.5H1zM1 13.25h16v1.5H1z" clip-rule="evenodd"></path></svg>
			</button>
			<!-- Logo Zeit Online  -->
			<div class="md:ml-14">
				<h1 class="text-5xl font-bold text-center">
					<a class="hover:scale-105 focus-visible:scale-105 transition-transform duration-300" href="/">
						<LogoZeitOnline />
					</a>
				</h1>
			</div>
			<!-- User Menu  -->
			<div class="flex items-center md:space-x-4">
				<a class="hidden md:block hover:bg-bg10 focus-visible:bg-bg10 transition-colors duration-300 p-2 rounded-md" href="/">
					<span class="text-sm font-bold text-accent100">Abo testen</span>
				</a>
				<button class="hover:bg-bg10 focus-visible:bg-bg10 transition-colors duration-300 p-2 rounded-md group">
					<svg class="h-6 w-6 group-hover:dark:text-black group-focus-visible:dark:text-black"  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path fill-rule="evenodd" d="M9 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M9 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8M4.642 12.996C3.98 13.77 3.75 15.01 3.75 17h-1.5c0-1.987.199-3.747 1.251-4.978C4.58 10.76 6.37 10.25 9 10.25s4.42.51 5.499 1.772C15.55 13.253 15.75 15.013 15.75 17h-1.5c0-1.99-.23-3.23-.892-4.004-.636-.744-1.846-1.246-4.358-1.246s-3.722.502-4.358 1.246" fill="currentColor" clip-rule="evenodd"></path></svg>
				</button>
			</div>
		</div>
		<div class="flex items-center justify-between py-3 border-t-2 border-gray-200 px-4">
			<nav class="nav__news flex items-center space-x-4 overflow-x-scroll max-w-full whitespace-nowrap dark:text-white">
				<span class="text-accent100">⏺ Live</span>
				<span class="text-black font-bold dark:text-white">Krieg in Israel und Gaza</span>
				<span class="text-gray-500 dark:text-white">vor 3 Stunden</span>
				<span class="text-gray-700 hover:text-black cursor-pointer dark:text-white dark:hover:text-gray-200">Rechtsextremismus</span>
				<span class="text-gray-700 hover:text-black cursor-pointer dark:text-white dark:hover:text-gray-200">Ukraine-Krieg</span>
				<span class="text-gray-700 hover:text-black cursor-pointer dark:text-white dark:hover:text-gray-200">US-Wahl</span>
				<span class="text-gray-700 hover:text-black cursor-pointer dark:text-white dark:hover:text-gray-200">Deutsche Bahn</span>
				<span class="text-gray-700 hover:text-black cursor-pointer dark:text-white dark:hover:text-gray-200">Deutsche Bahn</span>
				<span class="text-gray-700 hover:text-black cursor-pointer dark:text-white dark:hover:text-gray-200">Deutsche Bahn</span>
				<span class="text-gray-700 hover:text-black cursor-pointer dark:text-white dark:hover:text-gray-200">Alle Themen</span>
			</nav>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.nav__area {
		margin: var(--z-ds-space-16);
	}

	.nav__news::-webkit-scrollbar {
		display: none;
	}

</style>
