import {useState} from "preact/hooks"
import '../../styles/global.css'
export const BoringMode = () => {  
    const [boring, setIsBoring] = useState('global.css');
    const handleClick = () =>{
        document.activeElement.attributes
    }
    return (
        <button type="button"  
        className="bg-white text-black rounded-md font-bold flex items-center justify-center gap-3 px-4 py-3">Boring Mode!</button>
    )
}
export const EightiesMode = () =>{
    return (
      <button type="button"
        className="bg-white text-black rounded-md text-xs flex items-center justify-center gap-3 px-4 py-3 PressStart2P">Eighties Mode!</button>
    )
}