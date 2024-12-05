import { writable } from 'svelte/store';
import type { Venue } from './venueTypes';

type VenueStore = ReturnType<typeof writable<Venue>>;

export const projectBase4: VenueStore = writable<Venue>({
	name: 'Project-Based 4',
	stage: {
		position: {
			x: '30%',
			width: '60%',
			height: '15%'
		},
		style: {
			gradient: ['#000000', '#000000']
		}
	},
	zones: [
		{
			id: 'zoneA',
			name: 'Zone A',
			color: '#eb4034',
			position: {
				x: '24%',
				y: '10%',
				width: '25%',
				height: '50%'
			},
			rows: generateRows('A', 8, 0)
		},
		{
			id: 'zoneB',
			name: 'Zone B',
			color: '#348ceb',
			position: {
				x: '50%',
				y: '10%',
				width: '25%',
				height: '50%'
			},
			rows: generateRows('B', 8, 8)
		},
		{
			id: 'zoneC',
			name: 'Zone C',
			color: '#ebb134',
			position: {
				x: '76%',
				y: '10%',
				width: '25%',
				height: '50%'
			},
			rows: generateRows('C', 8, 16)
		}
	]
});

function generateRows(zoneId: string, seatsPerRow: number, startIndex: number) {
	const rowNames = ['A', 'B', 'C', 'D', 'E'];
	return rowNames.map((name) => ({
		name,
		seats: Array.from({ length: seatsPerRow }, (_, i) => ({
			id: `${name + (i + startIndex + 1)}`,
			status: 'available' as const
		}))
	}));
}
