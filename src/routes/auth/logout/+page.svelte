<script lang="ts">
	import { onMount } from 'svelte';
	import { logout } from '$lib/auth';
	import { goto } from '$app/navigation';
	import toast from 'svelte-french-toast';

	onMount(() => {
		logout();
		toast.success('Logged out successfully!');
		goto('/');
	});
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="text-center">
		<h2 class="text-2xl font-semibold">Processing logout...</h2>
		<p class="text-gray-600">Please wait</p>
	</div>
</div>
