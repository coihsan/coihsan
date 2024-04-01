import React, {useState, useEffect} from "preact/hooks"

export const [boring, setIsBoring] = useState('global.css');
export const [eighties, setIsEighties] = useState('eighties.css');
export const linkElement = 'global.css'
export const handleThemeChange = (theme) => {
    setActiveTheme(theme);
  };
  useEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = `src/styles/${boring}`;
    document.head.setAttribute(linkElement)
  }, [boring]);