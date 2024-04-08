import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Cq6yqv1_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Zinc Design - Landing Page","description":"Which of the two is superior and suitable for you considering the greater value of your investment?","pubDate":"Jan 08 2024","heroImage":"/images/ZincDesign.webp","heroImageAlt":"Zinc Design","tags":["Portfolios"],"techstack":"Next.js","srcIcon":"nextjs","category":"Landing Page","source":"https://github.com/coihsan/zinc-starters-rgkhtp/archive/refs/heads/main.zip","preview":"https://zinc-starter.vercel.app/"};
				const file = "/home/coihsan/coihsan/src/content/themes/zincdesign.md";
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
