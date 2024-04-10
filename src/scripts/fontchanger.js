
			function loadThemeCSS(themeFileName) {
			const existingLink = document.querySelector('link[rel="stylesheet"]');
			if (existingLink) {
				existingLink.remove();
			}
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = `../styles/${themeFileName}`;
			document.head.appendChild(link);
}