import React, {useState, useEffect} from "preact/hooks"

export const BoringMode = () => {
    const [boring, setIsBoring] = useState('global.css');
    const handleThemeChange = (theme) => {
        setActiveTheme(theme);
      };
      useEffect(() => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = `src/styles/${boring}`;
        document.head.appendChild(linkElement);
      }, [boring]);
            

    return
        <button type="button" onClick={() => handleThemeChange('global.css')}
        className="bg-white text-black rounded-md font-bold flex items-center justify-center gap-3 px-4 py-3">Boring Mode!</button>
}
export const EghtiesMode = () =>{
    return 
        <button type="button" onClick={() => handleThemeChange('eighties.css')}
        className="bg-white text-black rounded-md flex items-center justify-center gap-3 px-4 py-3 pressNormal">Eighties Mode!</button>
}