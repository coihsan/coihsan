import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Cq6yqv1_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Jhon Smith","description":"Which of the two is superior and suitable for you considering the greater value of your investment?","pubDate":"Dec 08 2022","heroImage":"/images/jhonsmith.webp","heroImageAlt":"jhonsmith.","tags":["Portfolios"],"techstack":"HTML Static","srcIcon":"html","category":"Portfolios","source":"https://macksmith-template.stackblitz.io/","preview":"https://macksmith-template.stackblitz.io/"};
				const file = "/home/coihsan/coihsan/src/content/themes/jhonsmith.md";
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
