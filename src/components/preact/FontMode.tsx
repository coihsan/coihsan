import {useState, useEffect} from "preact/hooks"

export default function FontMode(){
    const [isBoring, setIsBoring] = useState(true) 
    const [isEighties, setIsEighties] = useState(false)

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-3">
            <button type="button" 
            className="bg-white text-black rounded-md font-bold flex items-center justify-center gap-3 px-4 py-3">Boring Mode!</button>
            <button type="button" 
            className="bg-white text-black rounded-md flex items-center justify-center gap-3 px-4 py-3 pressNormal">Eighties Mode!</button>
        </div>
    )
}