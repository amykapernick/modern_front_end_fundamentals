import { defineConfig } from 'astro/config';
import devTools from '../_astro/devTools';

export default defineConfig({
	output: 'static',
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
		devTools
	],
});
