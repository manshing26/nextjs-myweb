"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { contentHome } from "@/content";
import { TextPlugin } from "gsap/TextPlugin";
import { sourceCodePro } from "@/app/UI/fonts";
import Image from "next/image";
import { LineNum, TypeConst, TypeVar, KeyConst, KeyVar, EqualSign, Comment, SemiColon, CurlyBrackets } from "@/app/UI/component/WordType";

export function HeroIntro(){
    const lineClass = "mb-2 sm:mb-3 md:mb-5 lg:mb-7 xl:mb-9 2xl:mb-11 " + sourceCodePro.className;

    useGSAP(() => {
        gsap.registerPlugin(TextPlugin);
        var tl = gsap.timeline({repeat:-1, repeatDelay:0.5})
            .to('#title',{
                text:"Web Developer", duration:1.8, ease:"none", repeat:1, repeatDelay:0.5, yoyo:true
            })
            .to('#title',{
                text:"Machine Learning Developer",duration:2.7, ease:"none", repeat:1, repeatDelay:0.5, yoyo:true
            },"+=0.5")
            .to('#title',{
                text:"Freelancer",duration:1.6, ease:'none', repeat:1, repeatDelay:0.5, yoyo:true
            },"+=0.5");

        gsap.to('#editor',{autoAlpha:0, repeat:-1, yoyo:true, duration:0.1, repeatDelay:0.5})
    })

    return(
        <>
            <p className={lineClass}>
                <LineNum num={1}/>
                <span className="text-fuchsia-500">{"import "} </span>
                <CurlyBrackets><KeyVar keyName={"skills"}/></CurlyBrackets>
                <span className="text-fuchsia-500">{" from "} </span>
                {`"experience"`}
                <SemiColon />
            </p>
            <p className={lineClass}>
                <LineNum num={2}/>
                <span className="text-fuchsia-500">{"import "} </span>
                <KeyConst keyName={"Innovation"}/>
                <span className="text-fuchsia-500">{" from "} </span>
                {`"passion"`}
                <SemiColon />
            </p>
            <p className={lineClass}>
                <LineNum num={3}/>
            </p>
            <p className={lineClass}>
                <LineNum num={4}/>
                <TypeConst />
                <KeyConst keyName={"Intro"} />
                <EqualSign />
                {`"${contentHome.heroIntro}"`}
                <SemiColon />
            </p>
            <p className={lineClass}>
                <LineNum num={5} change={true}/>
                <TypeVar />
                <KeyVar keyName={"title"} />
                <EqualSign />
                {`"`}
                <span id="title"></span>
                <span id="editor" className={"text-white"}>|</span>
                <span>&quot;</span>
                <SemiColon />
            </p>
            <div className={lineClass + " group inline-block "}>
                <LineNum num={6}/>
                <TypeConst />
                <KeyConst keyName={"Photo"} />
                <EqualSign />
                <span className="relative">
                    <div className="absolute invisible group-hover:visible border left-0 top-0 -translate-y-full h-96 w-96">
                        <div className="absolute top-0 left-0 w-full pl-3 bg-black text-white text-lg opacity-60 items-center">Preview: leon_man.png</div>
                        <Image src="/images/me.png" alt="Leon Man photo" width={500} height={500}/>
                    </div>
                    {`"leon_man.png"`}
                </span>
                <SemiColon />
                <br/>
            </div>
            <div className={lineClass}>
                <LineNum num={7}/>
                <Comment text={`// (PC)hover to show preview ↑`}/>
            </div>
            <p className={lineClass}>
                <LineNum num={8}/>
            </p>
        </>
    )
}