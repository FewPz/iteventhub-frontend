<script>
	let isMenuOpen = false; // State to manage mobile menu toggle
</script>

<nav class="bg-[#9f1c37] py-4 text-white">
	<div class="container mx-auto flex items-center justify-between px-6">
		<!-- Logo -->
		<a href="/" class="text-xl font-bold">EventPlatform</a>

		<!-- Hamburger Button for Mobile -->
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

		<!-- Desktop Menu -->
		<ul class="hidden space-x-6 md:flex">
			<li><a href="/" class="hover:underline">Home</a></li>
			<li><a href="#features" class="hover:underline">Features</a></li>
			<li><a href="#register" class="hover:underline">Register</a></li>
		</ul>
	</div>

	<!-- Mobile Menu -->
	<div class={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#9f1c37] text-white`}>
		<ul class="flex flex-col space-y-4 px-6 py-4">
			<li><a href="/" class="hover:underline">Home</a></li>
			<li><a href="#features" class="hover:underline">Features</a></li>
			<li><a href="#register" class="hover:underline">Register</a></li>
		</ul>
	</div>
</nav>
