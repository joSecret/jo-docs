// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon'
import liveCode from 'astro-live-code'

// https://astro.build/config
export default defineConfig({
	site: 'https://josecret.github.io/',
	base: 'jo-docs',
	integrations: [
		starlight({
			title: 'My Docs',
			customCss: [
        './src/styles/vars.css',
        './src/styles/custom.css',
        './src/styles/button.css',
      ],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'start/overview' },
						{ label: 'Installation', slug: 'start/installation' },
					],
				},
				{
					label: 'Components',
					autogenerate: { directory: 'components' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		icon(),
		liveCode(),
	],
});
