import { defineConfig } from 'astro/config';
import devTools from '../_astro/devTools';
import cssMode from '../_astro/cssMode';
import react from '@astrojs/react';

export default defineConfig({
	output: 'server',
	vite: {
		css: {
			postcss: `./config`
		},
		resolve: {
			alias: [
				{
					find: '@mixins',
					replacement: `./src/styles/mixins/index.css`
				}
			]
		}
	},
	integrations: [
		devTools,
		cssMode,
		react()
	],
});
