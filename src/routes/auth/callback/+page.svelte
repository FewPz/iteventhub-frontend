<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import toast from 'svelte-french-toast';

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		const token = params.get('token');

		if (token) {
			localStorage.setItem('token', token);
			toast.success('Logged in successfully!');
			goto('/');
		} else {
			toast.error('Login failed');
			goto('/login');
		}
	});
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="text-center">
		<h2 class="text-2xl font-semibold">Processing login...</h2>
		<p class="text-gray-600">Please wait while we complete your authentication.</p>
	</div>
</div>
