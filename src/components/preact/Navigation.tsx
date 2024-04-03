import { useState, useRef } from "preact/hooks";
import {navlink} from '../../const.ts';
import { Icon } from 'astro-icon/components';
import Pulse from '../ui/Pulse.astro';
export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = Astro.url;
    const subpath = pathname.match(/[^\/]+/g);
    const isActive = href === pathname || href === '/' + subpath?.[0];
    const MobileView = window.innerWidth = "480px"
    console.log('ok')
    return(
        <header className="w-full max-w-screen-lg mx-auto border-x-[1px] border-b-[1px] border-zinc-900 py-4 z-[100]">
            <div className="flex items-center justify-between max-w-screen-md mx-auto w-full px-5">
                <Pulse />
                <nav className="grid grid-cols-4 lg:flex items-center gap-1 lg:gap-2 z-50">
                    {navlink.map((item) =>(
                        <a href={item.href}>{item.text}</a>
                    ))}
                </nav>
                {
                    MobileView ?? 
                    <button type="button" className="flex md:hidden lg:hidden">
                        {isOpen ? <Icon name="hamburger" /> : <Icon name="close" />}
                    </button>
                }
            </div>
        </header>
    )
}