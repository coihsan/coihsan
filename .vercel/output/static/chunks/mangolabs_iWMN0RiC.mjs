import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Cq6yqv1_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Mangolabs Agency","description":"Your grandfather wants to teach about digital marketing such as SEO and SEM. see the documentation now","pubDate":"Jan 2023","logo":"/images/yourgrandpa.webp","logoAlt":"yourgrandpa","heroImage":"/images/comingsoon.webp","heroImageAlt":"mangolabs.app","usecase":"SaaS","domainName":"mangolabs.app","techstack":"Next.js","source":"https://coihsan.vercel.app/","preview":"https://coihsan.vercel.app/"};
				const file = "/home/coihsan/coihsan/src/content/projects/mangolabs.md";
				const url = undefined;
				function rawContent() {
					return "";
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
