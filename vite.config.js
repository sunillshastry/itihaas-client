import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), ViteMinifyPlugin()],
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
	preview: {
		host: '0.0.0.0',
		port: 3001,
	},
});
