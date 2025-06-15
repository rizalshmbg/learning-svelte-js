import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte()],
	build: {
		rollupOptions: {
			input: {
				index: 'index.html',
				hello: 'hello.html',
				counter: 'counter.html',
				'say-hello': 'say-hello.html',
				'counter-derived': 'counter-derived.html',
				'global-counter': 'global-counter.html',
				'auto-counter': 'auto-counter.html',
			},
		},
	},
});
