import type { ITransformedItem } from '../types.js';

export async function load({ fetch }) {
	const res = await fetch('/api/fetchRSS');
	const data = await res.json();
	const layoutIndex = Math.floor(Math.random() * 4);

	return {
		props: {
			data: data.items as ITransformedItem[],
			index: layoutIndex
		}
	};
}
