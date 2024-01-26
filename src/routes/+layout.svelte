<script>
	import Header from '../lib/layout/Header.svelte';
	import Footer from '../lib/layout/Footer.svelte';
	import Banner from '../lib/layout/Banner.svelte';
	import './styles.css';
</script>

<div class="page">
	<div class="page__content">
		<Header />
	
		<main>
			<slot />
		</main>
	
		<Banner />
		<Footer />
	
	</div>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
