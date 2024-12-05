import { writable } from 'svelte/store';

import type { User } from './interfaces/user.interface';

export const user = writable<User | null>(null);
export const isAuthenticated = writable<boolean>(false);

export async function checkAuth() {
	const token = localStorage.getItem('token');
	if (!token) {
		user.set(null);
		isAuthenticated.set(false);
		return;
	}
	try {
		const response = await fetch('http://localhost:3000/auth/verify', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		if (response.ok) {
			const data = await response.json();
			user.set(data.user);
			isAuthenticated.set(true);
		} else {
			localStorage.removeItem('token');
			user.set(null);
			isAuthenticated.set(false);
		}
	} catch (error) {
		console.error('Auth check failed:', error);
		user.set(null);
		isAuthenticated.set(false);
	}
}

export async function logout() {
	const token = localStorage.getItem('token');
	const response = await fetch('http://localhost:3000/auth/logout', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
	if (response.ok) {
		localStorage.removeItem('token');
		user.set(null);
		isAuthenticated.set(false);
	}
}
