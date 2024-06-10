import { fileURLToPath } from 'node:url';

const config = {
	name: 'astro-css-mode',
	hooks: {
		'astro:config:setup': ({ addDevToolbarApp }) => {
			addDevToolbarApp({
				id: "css-mode",
				name: "CSS Mode",
				icon: "🔮",
				entrypoint: fileURLToPath(new URL('./app.js', import.meta.url))
			});
		},
	},
};

export default config