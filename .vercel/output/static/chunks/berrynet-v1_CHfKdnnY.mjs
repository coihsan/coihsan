import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CSqObcGk.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Berrynet v.1 Landing Page","description":"Which of the two is superior and suitable for you considering the greater value of your investment?","pubDate":"Dec 08 2023","heroImage":"/images/berrynet-v1.webp","heroImageAlt":"berrynet v1","tags":["Company Profile"],"techstack":"Next.js","category":"Landing Page","source":"https://github.com/coihsan/berrynet-starters-rgkhtp/archive/refs/heads/main.zip","preview":"https://berrynet-starter.vercel.app/"};
				const file = "/home/coihsan/coihsan/src/content/themes/berrynet-v1.md";
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
