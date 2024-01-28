<script>
	import { page } from '$app/stores';
	import LogoZeitOnline from '$lib/components/LogoZeitOnline.svelte';

</script>

<header>
	<div class="max-w-full mx-auto ">
		<div class="nav__area flex justify-between items-center py-2 mx-1 md:mx-custom">
			<!-- Menu  -->
			<button aria-label="Menu aufmachen" class="flex items-center space-x-4 hover:bg-bg10 focus-visible:bg-bg10 dark:hover:bg-bg10 transition-colors duration-300 p-2 rounded-md">
				<svg class="h-6 w-6 dark:text-white"  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"  aria-hidden="true"><path fill-rule="evenodd" fill="currentColor" d="M1 8.25h16v1.5H1zM1 3.25h16v1.5H1zM1 13.25h16v1.5H1z" clip-rule="evenodd"></path></svg>
			</button>
			<!-- Logo Zeit Online  -->
			<div class="md:ml-14">
				<h1 class="font-bold text-center">
					<a class="hover:scale-105 focus-visible:scale-105 transition-transform duration-300" href="/">
						<LogoZeitOnline classExtra="w-44 h-auto md:w-full" />
					</a>
				</h1>
			</div>
			<!-- User Menu  -->
			<div class="flex items-center md:space-x-4">
				<a class="hidden md:block hover:bg-bg10 focus-visible:bg-bg10 dark:hover:bg-bg10 transition-colors duration-300 p-2 rounded-md" href="/">
					<span class="text-sm font-bold text-accent100">Abo testen</span>
				</a>
				<button aria-label="Dein Konto sehen" class="hover:bg-bg10 focus-visible:bg-bg10 dark:hover:bg-bg10 transition-colors duration-300 p-2 rounded-md">
					<svg class="h-6 w-6"  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path fill-rule="evenodd" d="M9 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M9 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8M4.642 12.996C3.98 13.77 3.75 15.01 3.75 17h-1.5c0-1.987.199-3.747 1.251-4.978C4.58 10.76 6.37 10.25 9 10.25s4.42.51 5.499 1.772C15.55 13.253 15.75 15.013 15.75 17h-1.5c0-1.99-.23-3.23-.892-4.004-.636-.744-1.846-1.246-4.358-1.246s-3.722.502-4.358 1.246" fill="currentColor" clip-rule="evenodd"></path></svg>
				</button>
			</div>
		</div>
		<div class="flex items-center justify-between border-t border-gray-200 px-4">
			<nav class="nav__news flex items-center space-x-1 overflow-x-scroll max-w-full whitespace-nowrap dark:text-white md:px-3">
				<span class="text-accent100">⏺ Live</span>
				<div class="flex items-center gap-3 p-2">
					<a href="/" class="text-black font-bold cursor-pointer dark:text-text70 dark:hover:bg-bg10 dark:hover:text-white rounded-md dark:focus-visible:bg-bg10 p-2">Krieg in Israel und Gaza</a>
					<small href="/" class="text-gray-300 dark:text-gray-500 mt-1">vor 3 Stunden.</small>
					<div class="text-gray-700"> | </div>
				</div>
				<a href="/" class="text-gray-700 hover:text-black cursor-pointer dark:text-text70 dark:font-bold dark:hover:bg-bg10 dark:hover:text-white p-2 rounded-md dark:focus-visible:bg-bg10">Rechtsextremismus</a>
				<a href="/" class="text-gray-700 hover:text-black cursor-pointer dark:text-text70 dark:font-bold dark:hover:bg-bg10 dark:hover:text-white p-2 rounded-md dark:focus-visible:bg-bg10">Ukraine-Krieg</a>
				<a href="/" class="text-gray-700 hover:text-black cursor-pointer dark:text-text70 dark:font-bold dark:hover:bg-bg10 dark:hover:text-white p-2 rounded-md dark:focus-visible:bg-bg10">US-Wahl</a>
				<a href="/" class="text-gray-700 hover:text-black cursor-pointer dark:text-text70 dark:font-bold dark:hover:bg-bg10 dark:hover:text-white p-2 rounded-md dark:focus-visible:bg-bg10">Deutsche Bahn</a>
				<a href="/" class="text-gray-700 hover:text-black cursor-pointer dark:text-text70 dark:font-bold dark:hover:bg-bg10 dark:hover:text-white p-2 rounded-md dark:focus-visible:bg-bg10">Umwelt</a>
				<a href="/" class="text-gray-700 hover:text-black cursor-pointer dark:text-text70 dark:font-bold dark:hover:bg-bg10 dark:hover:text-white p-2 rounded-md dark:focus-visible:bg-bg10">Gute Entwicklung</a>
				<a href="/" class="text-gray-700 hover:text-black cursor-pointer dark:text-text70 dark:font-bold dark:hover:bg-bg10 dark:hover:text-white p-2 rounded-md dark:focus-visible:bg-bg10">Alle Themen</a>
			</nav>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.nav__news::-webkit-scrollbar {
		display: none;
	}

</style>
