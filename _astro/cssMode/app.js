import { defineToolbarApp } from "astro/toolbar";

const devToolsApp = defineToolbarApp({
	init(canvas, app, ...args) {
		const body = document.querySelector('body');
		const bodyClass = 'css_mode'



		app.onToggled(({ state, ...params }) => {
			console.log({ app, canvas, args, params })
			if (state) {
				if (!body.classList.contains(bodyClass)) {
					body.classList.add(bodyClass);
				}
			}
			else {
				if (body.classList.contains(bodyClass)) {
					body.classList.remove(bodyClass);
				}
			}
		});
	},
});

export default devToolsApp 