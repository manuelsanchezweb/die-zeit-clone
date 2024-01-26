import type { ITransformedItem } from '../types.js';

export async function load({ fetch }) {
	const res = await fetch('/api/fetchRSS');
	const data = await res.json();

	const layoutIndex = new Date().getSeconds() % 2 === 0 ? 0 : 1;

	return {
		props: {
			data: data.items as ITransformedItem[],
			index: layoutIndex
		}
	};
}
