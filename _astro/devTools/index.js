import { fileURLToPath } from 'node:url';

const config = {
  name: 'my-astro-integration',
  hooks: {
    'astro:config:setup': ({ addDevToolbarApp }) => {
      addDevToolbarApp({
        id: "dev-tools",
        name: "Dev Tools",
        icon: "🪄",
        entrypoint: fileURLToPath(new URL('./app.js', import.meta.url))
      });
    },
  },
};

export default config