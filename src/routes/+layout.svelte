<script>
	import Header from '../lib/layout/Header.svelte';
	import Footer from '../lib/layout/Footer.svelte';
	import './styles.css';
</script>

<div class="page">
	<div class="page__content">
		<Header />
	
		<main>
			<slot />
		</main>
	
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
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
