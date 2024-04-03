import { useState, useRef } from "preact/hooks";
import {navlink} from '../../const';
import { Icon } from 'astro-icon/components';
import Pulse from 'astro/components';
export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false)
    console.log('ok')
    return(
        <header className="w-full max-w-screen-lg mx-auto border-x-[1px] border-b-[1px] border-zinc-900 py-4 z-[100]">
            <div className="flex items-center justify-between max-w-screen-md mx-auto w-full px-5">
                <Pulse />
                <nav className="grid grid-cols-4 lg:flex items-center gap-1 lg:gap-2 z-50">
                    {navlink.map((items) =>(
                        <a className="px-3 lg:px-4 flex items-center justify-center py-2 textxs bg-zinc-900 hover:bg-zinc-800 border hover:border-zinc-50 rounded-md border-zinc-900 transitionAll" href={items.href}>{items.text}</a>
                    ))}
                </nav>
                <button type="button" className="flex md:hidden lg:hidden">
                    {isOpen ? <Icon name="hamburger" /> : <Icon name="close" />}
                 </button>
            </div>
        </header>
    )
}