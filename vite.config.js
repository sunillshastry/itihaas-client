import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), ViteMinifyPlugin()],
	server: {
		host: import.meta.env.VITE_SERVER_HOST,
		port: import.meta.env.VITE_SERVER_PORT,
	},
	preview: {
		host: import.meta.env.VITE_PREVIEW_HOST,
		port: import.meta.env.VITE_PREVIEW_PORT,
	},
	resolve: {
		alias: {
			// eslint-disable-next-line no-undef
			'@': path.resolve(__dirname, './src'),
		},
	},
});
