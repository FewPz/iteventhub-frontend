<script lang="ts">
	import { projectBase4 } from '../../store/venue';
	import { fade, scale } from 'svelte/transition';
	import type { Zone, Seat, Venue } from '../../store/venueTypes';

	let venue: Venue;
	let selectedZone: Zone | null = null;
	let selectedSeats: Array<{ seatId: string; zoneId: string }> = [];

	projectBase4.subscribe((value: Venue) => {
		venue = value;
	});

	function selectSeat(seatId: string, zoneId: string): void {
		if (!selectedZone) return;

		const index = selectedSeats.findIndex((s) => s.seatId === seatId);
		selectedSeats =
			index === -1
				? [...selectedSeats, { seatId, zoneId }]
				: selectedSeats.filter((s) => s.seatId !== seatId);
	}

	type SeatStatus = 'empty' | 'occupied' | 'selected' | 'available';

	const getTotalPrice = (): number =>
		selectedSeats.reduce((total, seat) => {
			const zone = venue?.zones.find((z) => z.id === seat.zoneId);
			return total + (zone?.price ?? 0);
		}, 0);

	$: totalPrice = getTotalPrice();

	const getSeatStatus = (seat: Seat | null, zoneId: string): SeatStatus => {
		if (!seat) return 'empty';
		if (seat.status === 'occupied') return 'occupied';
		return selectedSeats.some((s) => s.seatId === seat.id) ? 'selected' : 'available';
	};

	$: selectedSeatsCount = selectedSeats.length;
	$: isPaymentDisabled = selectedSeatsCount === 0;

	type StyleProps = {
		x: string;
		y?: string;
		width: string;
		height: string;
	};

	const getPositionStyle = ({ x, y, width, height }: StyleProps): string => `
	  left: ${x};
	  ${y ? `top: ${y};` : ''}
	  width: ${width};
	  height: ${height};
	  transform: translateX(-50%);
	`;
</script>

<div class="min-h-screen bg-gray-50 py-8">
	<div class="mx-auto max-w-4xl px-4">
		<h1 class="mb-8 text-center text-4xl font-bold text-gray-900">
			{venue?.name ?? 'Loading...'}
		</h1>

		{#if venue}
			<div
				class="relative mx-auto mb-8 flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 font-bold text-white shadow-lg"
				style={getPositionStyle(venue.stage.position)}
				transition:fade
			>
				STAGE
			</div>

			<div class="relative h-96 w-full overflow-hidden rounded-3xl bg-white shadow-xl">
				{#each venue.zones as zone (zone.id)}
					<button
						class="absolute flex items-center justify-center rounded-lg font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
						style={`
				  ${getPositionStyle(zone.position)}
				  background-color: ${zone.color};
				`}
						on:click={() => (selectedZone = selectedZone?.id === zone.id ? null : zone)}
					>
						<div class="space-y-1 text-center">
							<span class="block text-lg">{zone.name}</span>
							<span class="block text-sm">฿{zone?.price}</span>
						</div>
					</button>
				{/each}
			</div>

			{#if selectedZone}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
					on:click|self={() => (selectedZone = null)}
					transition:fade
				>
					<div class="w-full max-w-xl rounded-xl bg-white p-6 shadow-2xl md:p-8" transition:scale>
						<div class="mb-6 text-center">
							<h3 class="text-2xl font-bold text-gray-900">{selectedZone.name}</h3>
							<p class="text-gray-600">฿{selectedZone?.price} per seat</p>
						</div>

						<div class="max-h-[60vh] space-y-4 overflow-y-auto px-4">
							{#each selectedZone.rows as row (row.name)}
								<div class="flex items-center gap-4">
									<span class="w-8 text-center font-bold text-gray-700">{row.name}</span>
									<div class="flex flex-1 flex-wrap justify-center gap-2">
										{#each row.seats as seat (seat?.id)}
											{#if seat === null}
												<!-- svelte-ignore element_invalid_self_closing_tag -->
												<div class="h-8 w-8" />
											{:else}
												{@const status = getSeatStatus(seat, selectedZone.id)}
												<button
													class="h-8 w-8 rounded-md text-sm font-medium text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
													class:bg-emerald-500={status === 'available'}
													class:bg-gray-400={status === 'occupied'}
													class:bg-blue-500={status === 'selected'}
													class:scale-110={status === 'selected'}
													disabled={seat.status === 'occupied'}
													on:click={() => selectSeat(seat.id, selectedZone!!.name + selectedZone!!.id)}
												>
													{seat.id}
												</button>
											{/if}
										{/each}
									</div>
								</div>
							{/each}
						</div>

						<div class="mt-6 space-y-4">
							<div class="rounded-lg bg-gray-50 p-4">
								<div class="flex justify-between text-gray-600">
									<span>Selected seats</span>
									<span>{selectedSeatsCount}</span>
								</div>
								<div class="mt-2 flex justify-between text-lg font-bold text-gray-900">
									<span>Total amount</span>
									<span>฿{totalPrice.toLocaleString()}</span>
								</div>
							</div>

							<div class="flex gap-4">
								<button
									class="flex-1 rounded-lg bg-gray-200 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-300"
									on:click={() => (selectedZone = null)}
									type="button"
								>
									Close
								</button>
								<button
									class="flex-1 rounded-lg bg-blue-600 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
									disabled={isPaymentDisabled}
									type="button"
								>
									Proceed to Payment
								</button>
							</div>
						</div>
					</div>
				</div>
			{/if}
		{/if}
	</div>
</div>
