/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gap: {
				custom: 'var(--z-gap)'
			},
			spacing: {
				custom: 'var(--z-gap)'
			},
			colors: {
				accent100: 'var(--z-ds-color-accent-100)',
				bg10: 'var(--z-ds-color-background-10)',
				text70: 'var(--z-ds-color-text-70)',
				bgBody: 'var(--z-background-body)',
				bgPrimary: 'var(--z-background-primary)'
			}
		}
	},
	plugins: []
};
