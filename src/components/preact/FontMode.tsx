// import { handleThemeChange } from "../../utils/FontChanger";
import '../../styles/global.css'
export const BoringMode = () => {  
    return (
        <button type="button" onClick={handleChanges}
        className="bg-white text-black rounded-md font-bold flex items-center justify-center gap-3 px-4 py-3">Boring Mode!</button>
    )
}
export const EightiesMode = () =>{
    return (
      <button type="button"
        className="bg-white text-black rounded-md flex items-center justify-center gap-3 px-4 py-3 eighties-mode">Eighties Mode!</button>
    )
}