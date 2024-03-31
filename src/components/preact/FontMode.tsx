import {useState, useEffect} from "preact/hooks"

export default function FontMode(){
    const [isBoring, setIsBoring] = useState(true) 
    const [isEighties, setIsEighties] = useState(false)

    const handleClick(){
        setIsBoring(false)
    }

    return(
        <div>
            <button type="button">Boring Mode!</button>
            <button type="button">Eighties Mode!</button>
        </div>
    )
}