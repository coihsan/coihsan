import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CSqObcGk.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Bhadrika Cipta Resume","description":"Which of the two is superior and suitable for you considering the greater value of your investment?","pubDate":"Dec 08 2022","heroImage":"/images/bhadrikacipta.webp","heroImageAlt":"Bhadrika Cipta.","tags":["Portfolios"],"techstack":"Vite.js","category":"Portfolios","source":"https://github.com/coihsan/bhadrika-cipta-template/archive/refs/heads/main.zip","preview":"https://coihsan.github.io/bhadrika-cipta-template/"};
				const file = "/home/coihsan/coihsan/src/content/themes/bhadrikacipta.md";
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
