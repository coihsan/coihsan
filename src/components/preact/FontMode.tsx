import {useState, useEffect} from "preact/hooks"
export default function BoringMode() {  
    const [theme, setTheme] = useState("eighties");

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `styles/${theme}.css`;
        document.head.appendChild(link);

        return () => {
        link.remove();
        };
    }, [theme]);

    return (
        <>
            <button type="button" onClick={() => setTheme("global")}
            className="bg-zinc-800 border border-zinc-50/10 rounded-md font-bold flex items-center justify-center gap-3 px-4 h-12">Boring Mode!</button>
            <button type="button" onClick={() => setTheme("eighties")}
            className="bg-blue-500 border border-zinc-50 rounded-md font-bold flex items-center justify-center gap-3 px-4 h-12">Eighties Mode!</button>
        </>
    )
}