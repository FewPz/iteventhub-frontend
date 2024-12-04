<script lang="ts">
	import '../app.css';

	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<!-- Navbar -->
	<Navbar />

	<!-- Main Content -->
	<main class="flex-grow">
		<slot />
	</main>

	<!-- Footer -->
	<Footer />
</div>
