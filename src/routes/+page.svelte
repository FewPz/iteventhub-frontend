<script>
	// @ts-nocheck
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	onMount(() => {
		AOS.init({
			duration: 1000,
			once: true
		});
	});

	let formData = {
		name: '',
		email: ''
	};

	function handleSubmit() {
		// Basic validation
		if (formData.name && formData.email) {
			alert('ลงทะเบียนสำเร็จ!');
		} else {
			alert('กรุณากรอกข้อมูลให้ครบถ้วน');
		}
	}

	//400x566px
	const upcomingEvents = [
		{
			title: 'BNK48 Janken Tournament 2020',
			dateRange: '30 Nov - 07 Dec',
			location: 'Bon Marché Market Park, Bangkok',
			poster: 'https://via.placeholder.com/300x400?text=Event+1'
		},
		{
			title: 'BNK48 Space Mission Concert - มาร่วมสร้างคอนเสิร์ตที่สวยงามที่สุดในกาแลกซีไปด้วยกัน!',
			dateRange: '3 Dec - 4 Dec',
			location: 'Paragon Hall @ Siam Paragon, Bangkok',
			poster: 'https://via.placeholder.com/300x400?text=Event+2'
		},
		{
			title: 'Tao Kae Noi Presents BNK48 1st Concert “STARTO”',
			dateRange: '3 Dec - 4 Dec',
			location: 'อาคารไทยเบฟ คอนเวนชั่น',
			poster: 'https://via.placeholder.com/300x400?text=Event+3'
		},
		{
			title: 'Cherprang’s Fanmeet -Me and My Cats-',
			dateRange: '4 Dec - 5 Dec',
			location: 'Waterfall Party, Surat Thani',
			poster: 'https://via.placeholder.com/300x400?text=Event+4'
		}
	];
</script>

<div class="min-h-screen bg-gray-50 text-gray-900">
	<!-- Hero Section -->
	<header class="relative overflow-hidden bg-[#9f1c37] py-16 text-white" transition:fade>
		<div
			class="container relative z-10 mx-auto px-6 text-center"
			data-aos="fade-up"
			data-aos-duration="1500"
		>
			<div class="mx-auto max-w-3xl">
				<h1 class="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">IT-EventHub</h1>
				<p class="mb-8 text-xl opacity-90 md:text-2xl">
					แพลตฟอร์มครบวงจรอันดับหนึ่ง สำหรับส่งเสริมการจัดกิจกรรมอีเวนต์
				</p>
				<a
					href="#features"
					class="inline-block transform rounded-full bg-white px-8 py-3 font-semibold
					text-[#9f1c37] transition duration-300 hover:scale-105 hover:shadow-lg"
				>
					เริ่มต้นใช้งาน
				</a>
			</div>
		</div>

		<!-- Background Overlay -->
		<div
			class="absolute inset-0 z-0 bg-black opacity-20"
			style="clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);"
		></div>
	</header>

	<!-- Upcoming Events Section -->
	<section id="upcoming-events" class="bg-gray-50 py-16 shadow-sm">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Header -->
			<div class="mb-10 flex items-center justify-between">
				<h2 class="text-3xl font-extrabold tracking-tight text-primary">Upcoming Events</h2>
			</div>

			<!-- Grid Layout for Event Cards -->
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{#each upcomingEvents as event}
					<div
						class="relative rounded-lg border border-gray-100
                               bg-white shadow-sm
                               transition-all duration-300
                               hover:-translate-y-1 hover:shadow-md"
					>
						<!-- Event Badge -->
						<div class="absolute right-2 top-2 z-10">
							<span class="rounded-full bg-blue-500 px-2 py-1 text-xs text-white">
								{event.dateRange}
							</span>
						</div>

						<!-- Poster -->
						<div class="relative overflow-hidden rounded-t-lg">
							<img
								src={event.poster}
								alt={event.title}
								class="h-48 w-full object-cover
                                       transition-transform duration-300
                                       group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-black opacity-10 transition-opacity hover:opacity-0"
							></div>
						</div>

						<!-- Event Info -->
						<div class="space-y-1.5 p-3">
							<h3 class="line-clamp-2 text-sm font-bold leading-tight text-gray-900">
								{event.title}
							</h3>
							<div class="flex items-center space-x-1 text-xs text-gray-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-3.5 w-3.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<span class="truncate">{event.location}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section id="features" class="bg-gray-100 py-16">
		<div class="container mx-auto px-6">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-3xl font-bold text-[#9f1c37]" data-aos="fade-up">คุณสมบัติเด่น</h2>
				<p class="mx-auto max-w-2xl text-gray-600">
					เครื่องมือที่ออกแบบมาเพื่อให้การจัดการอีเวนต์เป็นเรื่องง่าย และมีประสิทธิภาพ
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				{#each [{ title: 'จัดการกิจกรรมได้ง่าย', description: 'เครื่องมือที่ใช้งานง่าย ช่วยให้คุณวางแผนและจัดการกิจกรรมได้สะดวก', delay: 100 }, { title: 'สมัครเข้าร่วมได้รวดเร็ว', description: 'ระบบการลงทะเบียนที่รวดเร็วและเป็นมิตรกับผู้ใช้งาน', delay: 200 }, { title: 'ข้อมูลเชิงลึกครบถ้วน', description: 'วิเคราะห์ผลลัพธ์และติดตามความสำเร็จของกิจกรรมได้ง่ายๆ', delay: 300 }] as feature}
					<div
						class="transform rounded-xl bg-white p-6 text-center shadow-lg transition
						hover:-translate-y-2 hover:shadow-xl"
						data-aos="zoom-in"
						data-aos-delay={feature.delay}
					>
						<div class="mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="mx-auto h-12 w-12 text-[#9f1c37]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{#if feature.title === 'จัดการกิจกรรมได้ง่าย'}
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
									/>
								{:else if feature.title === 'สมัครเข้าร่วมได้รวดเร็ว'}
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								{:else}
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								{/if}
							</svg>
						</div>
						<h3 class="mb-3 text-xl font-semibold text-[#9f1c37]">
							{feature.title}
						</h3>
						<p class="text-gray-600">
							{feature.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Registration Section -->
	<section id="register" class="bg-gray-100 py-16">
		<div class="container mx-auto px-6">
			<div class="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-lg" data-aos="fade-up">
				<h2 class="mb-6 text-center text-3xl font-bold text-[#9f1c37]">สมัครเข้าร่วมกิจกรรม</h2>
				<form on:submit|preventDefault={handleSubmit} class="space-y-4">
					<div>
						<label for="name" class="mb-2 block text-sm font-medium text-gray-700"> ชื่อ </label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							required
							class="w-full rounded-md border border-gray-300 px-4 py-2
							focus:outline-none focus:ring-2 focus:ring-[#9f1c37]"
							placeholder="กรอกชื่อของคุณ"
						/>
					</div>
					<div>
						<label for="email" class="mb-2 block text-sm font-medium text-gray-700"> อีเมล </label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							required
							class="w-full rounded-md border border-gray-300 px-4 py-2
							focus:outline-none focus:ring-2 focus:ring-[#9f1c37]"
							placeholder="กรอกอีเมลของคุณ"
						/>
					</div>
					<button
						type="submit"
						class="w-full rounded-md bg-[#9f1c37] py-3 text-white
						transition duration-300 ease-in-out hover:bg-red-700"
					>
						ลงทะเบียน
					</button>
				</form>
			</div>
		</div>
	</section>
</div>
