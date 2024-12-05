<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { LogIn } from 'lucide-svelte';
	import toast from 'svelte-french-toast';

	const handleGoogleLogin = async () => {
		try {
			window.location.href = `http://localhost:3000/auth/google`;
		} catch (error) {
			toast.error('Failed to redirect. Please try again.');
		}
	};
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-100 px-4">
	<div class="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
		<div>
			<h2 class="text-center text-3xl font-bold text-[#9f1c37]">Sign in</h2>
			<p class="mt-2 text-center text-sm text-gray-600">Sign in to access your account</p>
		</div>

		<div class="mt-8 space-y-6">
			<button
				type="button"
				on:click={handleGoogleLogin}
				aria-label="Sign in with Google"
				class="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9f1c37] focus:ring-offset-2"
			>
				<LogIn class="h-5 w-5" />
				Continue with Google
			</button>
		</div>
	</div>
</div>
