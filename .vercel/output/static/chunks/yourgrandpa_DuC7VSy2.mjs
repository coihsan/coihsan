import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CSqObcGk.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><img src=\"/public/images/yourgrandpa.webp\" alt=\"A starry night sky.\"></p>";

				const frontmatter = {"title":"YourGrandpa","description":"Your grandfather wants to teach about digital marketing such as SEO and SEM. see the documentation now","pubDate":"Des 2023","logo":"/images/yourgrandpa.webp","heroImage":"/images/tiditodo.webp","heroImageAlt":"mangolabs.app","usecase":"Blog","domainName":"mangolabs.app","techstack":"Astro.js","source":"https://coihsan.vercel.app/","preview":"https://coihsan.vercel.app/"};
				const file = "/home/coihsan/coihsan/src/content/projects/yourgrandpa.md";
				const url = undefined;
				function rawContent() {
					return "![A starry night sky.](/public/images/yourgrandpa.webp)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
