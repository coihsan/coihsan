import {useState, useEffect} from "preact/hooks"
export default function BoringMode() {  
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'global'); // Initial theme from localStorage or default

useEffect(() => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';

  if (localStorage.getItem(theme)) {
    link.href = `./src/styles/${theme}.css`;
  } else {
    link.href = './src/styles/global.css';
  }

  document.head.appendChild(link);

  return () => document.head.removeChild(link);
}, [theme]);

const setThemeWithStorage = (newTheme) => {
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
};
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
            <button type="submit" onClick={() => setThemeWithStorage("global")}
            className="bg-zinc-800 border border-zinc-50 rounded-md font-bold flex items-center w-full justify-center gap-3 px-4 h-12">
                {theme === "global" ? <ImageCheck /> : null}
                <span className="textButtonMode">Boring Mode!</span>
            </button>
            <button type="submit" onClick={() => setThemeWithStorage("eighties")}
            className="bg-blue-500/10 border border-zinc-50 rounded-md font-bold flex items-center w-full justify-center gap-3 px-4 h-12">
                {theme === "eighties" ? <ImageCheck /> : null}
                <span className="textxs">Eighties Mode!</span>
            </button>
        </div>
    )
}
const ImageCheck = () =>{
    return <img className="fill-white" src="src/assets/icons/check.svg" alt="" />
}