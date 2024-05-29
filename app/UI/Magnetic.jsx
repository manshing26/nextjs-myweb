"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Magnetic({children}){
    const magnetic = useRef(null);

    useGSAP( () => {
        const xTo = gsap.quickTo(magnetic.current.children, "x", {duration: 0.5, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current.children, "y", {duration: 0.5, ease: "elastic.out(1, 0.3)"})

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = magnetic.current.getBoundingClientRect();
            const x = (clientX - (left + width/2)) * 0.5
            const y = (clientY - (top + height/2)) * 0.5

            xTo(x);
            yTo(y);
        }

        const mouseLeave = (e) => {
            gsap.to(magnetic.current.children, {x: 0, duration: 0.7, ease:"bounce.out"})
            gsap.to(magnetic.current.children, {y: 0, duration: 0.7, ease:"bounce.out"})

            xTo(0);
            yTo(0);
        }

        magnetic.current.addEventListener("mousemove", mouseMove)
        magnetic.current.addEventListener("mouseleave", mouseLeave)

        return () => {
            magnetic.current.removeEventListener("mousemove", mouseMove)
            magnetic.current.removeEventListener("mouseleave", mouseLeave)
        }

    }, [])

    return (
        <div ref={magnetic}>
            {children}
        </div>
    )}
