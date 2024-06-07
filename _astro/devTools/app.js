import { defineToolbarApp } from "astro/toolbar";

const devToolsApp = defineToolbarApp({
	init(canvas, app, ...args) {
		const body = document.querySelector('body');

		app.onToggled(({ state }) => {
			if (body.classList.contains('development')) {
				body.classList.remove('development');
			} else {
				body.classList.add('development');
			}
		});
	},
});

export default devToolsApp 