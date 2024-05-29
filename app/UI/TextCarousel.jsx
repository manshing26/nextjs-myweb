"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

export default function TextCarousel({className, text}){
    const animationRef = useRef();
    const tl = useRef();

    useGSAP(() => {
        tl.current = gsap.to(
            ".to-be-move",
            {xPercent:-100,duration:10,ease:"linear",repeat:-1}
        )
    },{scope:animationRef})

    return(
        <div className={"w-full text-nowrap flex " + className} ref={animationRef} onMouseEnter={()=>{tl.current.timeScale(0.5)}} onMouseLeave={()=>{tl.current.timeScale(1)}}>
            <p className="uppercase to-be-move px-3 lg:px-8">{text}</p>
            <p className="uppercase to-be-move px-3 lg:px-8">{text}</p>
        </div>
    )
}