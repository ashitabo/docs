import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
	title: 'あしたぼホームページ 開発ドキュメント',
	tagline: 'えいえいおー！',
	favicon: 'favicon.png',

	future: {
		v4: true,
	},

	url: 'https://docs.ashitabo.net',
	baseUrl: '/',

	organizationName: 'ashitaboliff',
	projectName: 'docs',

	onBrokenLinks: 'throw',

	i18n: {
		defaultLocale: 'ja',
		locales: ['ja'],
	},

	themes: ['@docusaurus/theme-mermaid'],

	markdown: {
		mermaid: true,
	},

	plugins: ['@docusaurus/theme-live-codeblock'],

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					editUrl: 'https://github.com/ashitaboliff/docs/edit/main/',
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true,
					},
					editUrl: 'https://github.com/ashitaboliff/docs/edit/main/',
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: 'img/docusaurus-social-card.jpg',
		colorMode: {
			respectPrefersColorScheme: true,
		},
		liveCodeBlock: {
			playgroundPosition: 'bottom',
		},
		navbar: {
			title: 'あしたぼ ドキュメント',
			logo: {
				alt: 'あしたぼホームページ ロゴ',
				src: 'favicon.png',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'ドキュメント',
				},
				{
					href: 'https://github.com/ashitaboliff/docs',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'あしたぼホームページ',
					items: [
						{
							label: 'あしたぼホームページ',
							href: 'https://ashitabo.net',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'ロードマップ',
							href: 'https://www.ashitabo.net/changelog',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/ashitaboliff/docs',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} 信州大学工学部軽音楽サークル あしたぼ. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
}

export default config
