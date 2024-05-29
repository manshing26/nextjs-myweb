"use client";

import { Bars3Icon } from "@heroicons/react/24/outline"
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react"
import Link from "next/link";
import { sitemap } from "@/sitemap.js"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Magnetic from "@/app/UI/Magnetic";

export default function Burger() {

    const [menuOpened, setMenuOpened] = useState(false);
    const tl = useRef();
    const burgerRef = useRef();
    const linkClass = "uppercase text-5xl sm:text-6xl lg:text-8xl text-slate-200 cursor-pointer mb-10 border-2 border-transparent hover:border-slate-200 py-1 px-2";

    function menuToggle() {
        setMenuOpened(!menuOpened);
        animation();
    }
    function animation() {
        if (menuOpened){
            tl.current.reverse();

        } else {
            tl.current.restart();
        }
    }
    function closeMenu() {
        setMenuOpened(false);
        animation();
    }
    useGSAP(()=>{

        tl.current = gsap.timeline({paused:true});
        tl.current
            .to(burgerRef.current,{scale:0,duration:0.35})
            .set("#menuCircle",{autoAlpha:1})
            .to("#menuCircle",{scale:1.5,duration:1,ease:"power4.inOut"})
            .to("#navMenu",{autoAlpha:1,duration:0.3})
    })

    return(
        <>
            <Magnetic>
                <div ref={burgerRef} className="z-10 group w-24 h-24 bg-gradient-radial from-black to-gray-500 rounded-full flex justify-center items-center" onClick={menuToggle}>
                    <Bars3Icon className={"w-7 h-7 text-white"}/>
                </div>
            </Magnetic>

            <div id="menuCircle" className="z-40 fixed screen-circle flex justify-center items-center scale-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible" onClick={menuToggle}></div>

            <div id="navMenu" className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center invisible">
                <a className={linkClass}>home</a>
                <a className={linkClass}>about</a>
                <a className={linkClass}>contact</a>
                <p className="text-lg sm:text-xl text-slate-200 mt-20 text-center">Click anywhere to close</p>
            </div>
        </>
)}