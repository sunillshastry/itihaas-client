import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import path from 'path';
import mdx from '@mdx-js/rollup';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), ViteMinifyPlugin(), mdx()],
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
	preview: {
		host: '0.0.0.0',
		port: 3001,
	},
	resolve: {
		alias: {
			// eslint-disable-next-line no-undef
			'@': path.resolve(__dirname, './src'),
		},
	},
});
