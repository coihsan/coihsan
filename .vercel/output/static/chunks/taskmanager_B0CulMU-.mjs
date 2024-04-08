import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Cq6yqv1_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<!-- ![A starry night sky.](/public/assets/tiditodo.webp) -->";

				const frontmatter = {"title":"Task Manager","description":"Task Manager for personal or team projects, including project management, roadmap planning, daily tasks, notes, boards, and more. You can utilize this task manager for free, whether for personal use or for teams. All your data, such as files, images, or PDFs, remains private and is subject to limitations.","pubDate":"Jan 2024","logo":"/tiditodo-icon.svg","heroImage":"/images/comingsoon.webp","heroImageAlt":"tiditodo.app","usecase":"SaaS","domainName":"tiditodo.app","techstack":"Next.js","source":"https://coihsan.vercel.app/","preview":"https://coihsan.vercel.app/"};
				const file = "/home/coihsan/coihsan/src/content/projects/taskmanager.md";
				const url = undefined;
				function rawContent() {
					return "<!-- ![A starry night sky.](/public/assets/tiditodo.webp) -->\n";
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
