<script>
	// @ts-nocheck

	import { projectBase4 } from '../../store/venue';

	// @ts-ignore
	/**
	 * @type {{ zones: any; stage: any; name?: string; }}
	 */
	let venue;
	// @ts-ignore
	/**
	 * @type {{ name: any; rows: any; id: any; } | null}
	 */
	let selectedZone = null;
	// @ts-ignore
	/**
	 * @type {any[]}
	 */
	let selectedSeats = [];

	// Subscribe to store
	projectBase4.subscribe((value) => {
		venue = value;
	});

	// Toggle seat selection
	// @ts-ignore
	function selectSeat(seatId, zoneId) {
		// @ts-ignore
		const index = selectedSeats.findIndex((s) => s.seatId === seatId);
		if (index === -1) {
			// @ts-ignore
			selectedSeats = [...selectedSeats, { seatId, zoneId }];
		} else {
			// @ts-ignore
			selectedSeats = selectedSeats.filter((s) => s.seatId !== seatId);
		}
	}

	// Calculate total price
	function getTotalPrice() {
		// @ts-ignore
		return selectedSeats.reduce((total, seat) => {
			// @ts-ignore
			const zone = venue.zones.find((z) => z.id === seat.zoneId);
			return total + (zone ? zone.price : 0);
		}, 0);
	}

	$: totalPrice = getTotalPrice();
</script>

<div class="mx-auto w-full max-w-4xl p-4">
	<!-- Stage -->
	<div class="text-center font-bold text-3xl mb-4">
		Project Based 4
	</div>
	<div
		class="relative mx-auto flex items-center justify-center rounded-full font-bold text-white"
		style="
			left: {venue.stage.position.x};
			top: {venue.stage.position.y};
			width: {venue.stage.position.width};
			height: {venue.stage.position.height};
			transform: translateX(-50%);
			background: linear-gradient(to right, {venue.stage.style.gradient.join(', ')});
		">
		STAGE
	</div>

	<!-- Zones -->
	<div class="relative h-96 w-full overflow-hidden rounded-3xl">
		{#each venue.zones as zone}
			<button
				class="absolute flex items-center justify-center font-medium text-white transition-opacity hover:opacity-80"
				style="
						left: {zone.position.x};
						top: {zone.position.y};
						width: {zone.position.width};
						height: {zone.position.height};
						background-color: {zone.color};
						transform: translateX(-50%);
				"
				on:click={() => (selectedZone = selectedZone === zone ? null : zone)}
			>
				{zone.name}
			</button>
		{/each}
	</div>

	<!-- Seat Selection Modal -->
	{#if selectedZone}
		<div
			class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
			on:click|self={() => (selectedZone = null)}
		>
			<div class="w-full max-w-xl rounded-lg bg-white p-6 md:p-8">
				<h3 class="mb-4 text-xl font-bold text-center">{selectedZone.name}</h3>

				<!-- Rows -->
				<div class="space-y-4">
					{#each selectedZone.rows as row}
						<div class="flex flex-wrap items-center justify-center gap-4">
							<!-- Row Name -->
							<span class="w-8 text-center font-bold">{row.name}</span>

							<!-- Row Seats -->
							<div class="flex flex-wrap justify-center gap-2">
								{#each row.seats as seat}
									{#if seat === null}
										<div class="w-8"></div>
									{:else}
										<button
											class="h-8 w-8 rounded-md text-sm text-white"
											class:bg-green-500={seat.status === 'available'}
											class:bg-gray-500={seat.status === 'occupied'}
											class:bg-blue-500={selectedSeats.some((s) => s.seatId === seat.id)}
											disabled={seat.status === 'occupied'}
											on:click={() => selectSeat(seat.id, selectedZone.id)}
										>
											{seat.id}
										</button>
									{/if}
								{/each}
							</div>
						</div>
					{/each}
				</div>

				<!-- Price -->
				<div class="mt-4 rounded bg-gray-100 p-4 text-center">
					<p>Selected: {selectedSeats.length} seats</p>
					<p class="font-bold">Total: ฿{totalPrice.toLocaleString()}</p>
				</div>

				<!-- Close Button -->
				<button
					class="mt-4 w-full rounded bg-gray-200 p-2 hover:bg-gray-300"
					on:click={() => (selectedZone = null)}
				>
					Close
				</button>
			</div>
		</div>
	{/if}
</div>
