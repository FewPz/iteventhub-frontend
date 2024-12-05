<script>
	import { isAuthenticated, user, logout } from '$lib/auth';
	import { goto } from '$app/navigation';
	import toast from 'svelte-french-toast';
	let isMenuOpen = false; 

	const handleLogout = async () => {
		try {
			toast.loading("Redirecting to logout...");
			goto('/auth/logout');
		} catch (error) {
			toast.error('Failed to logout. Please try again.');
		}
	};
</script>

<nav class="bg-[#9f1c37] py-4 text-white">
	<div class="container mx-auto flex items-center justify-between px-6">
		<a href="/" class="text-xl font-bold">EventPlatform</a>
		<button
			class="text-white focus:outline-none md:hidden"
			aria-label="Toggle Menu"
			on:click={() => (isMenuOpen = !isMenuOpen)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16m-7 6h7"
				/>
			</svg>
		</button>
		<ul class="hidden space-x-6 md:flex items-center">
			<li><a href="/" class="hover:underline">Home</a></li>
			<li><a href="#features" class="hover:underline">Features</a></li>
			{#if $isAuthenticated}
				<li>
					<!-- Profile Picture -->
					<div class="flex items-center space-x-2">
						<img
							src="{$user?.avatar}"
							alt="User Avatar"
							class="w-8 h-8 rounded-full border-2 border-white"
						/>
					</div>
				</li>
				<li><button on:click={handleLogout} class="hover:underline">Logout</button></li>
			{:else}
				<li><a href="/auth" class="hover:underline">Login</a></li>
			{/if}
		</ul>
	</div>
	<div class={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#9f1c37] text-white`}>
		<ul class="flex flex-col space-y-4 px-6 py-4">
			<li><a href="/" class="hover:underline">Home</a></li>
			<li><a href="#features" class="hover:underline">Features</a></li>
			{#if $isAuthenticated}
				<li>
					<div class="flex items-center space-x-2">
						<img
							src="{$user?.avatar}"
							alt="User Avatar"
							class="w-8 h-8 rounded-full border-2 border-white"
						/>
					</div>
				</li>
				<li><button on:click={handleLogout} class="hover:underline">Logout</button></li>
			{:else}
				<li><a href="/auth" class="hover:underline">Login</a></li>
			{/if}
		</ul>
	</div>
</nav>
