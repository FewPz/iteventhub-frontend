export interface Stage {
	position: {
		x: string;
		width: string;
		height: string;
	};
	style: {
		gradient: string[];
	};
}

export interface Seat {
	id: string;
	status: 'available' | 'occupied';
}

export interface Row {
	name: string;
	seats: (Seat | null)[];
}

export interface Zone {
	id: string;
	name: string;
	color: string;
	price?: number; // Add this
	position: {
		x: string;
		y: string;
		width: string;
		height: string;
	};
	rows: Row[];
}

export interface Venue {
	name: string;
	stage: Stage;
	zones: Zone[];
}
