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
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					react: ['react', 'react-dom'],
					tanstack: ['@tanstack/react-query', '@tanstack/react-query-devtools'],
					router: ['react-router-dom'],
					mdx: ['@mdx-js/react', '@mdx-js/rollup'],
					form: ['react-hook-form'],
					tailwindcss: ['tailwindcss', 'tailwind-merge'],
				},
			},
		},
	},
	preview: {
		host: '0.0.0.0',
		port: 3001,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
