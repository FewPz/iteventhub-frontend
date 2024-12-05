<script lang="ts">
	import { checkAuth } from '$lib/auth';
	import { onMount } from 'svelte';
	import '../app.css';

	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { Toaster } from 'svelte-french-toast';

	onMount(() => {
		checkAuth();
	});
</script>

<div class="flex min-h-screen flex-col">
	<!-- Navbar -->
	<Toaster />
	<Navbar />

	<!-- Main Content -->
	<main class="flex-grow">
		<slot />
	</main>

	<!-- Footer -->
	<Footer />
</div>
