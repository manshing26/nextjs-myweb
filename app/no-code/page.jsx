"use client"
import Image from "next/image"
import Magnetic from "@/app/UI/Magnetic"
import { contentNoCode, contentAbout, contentHome } from "@/content"
import EMailForm from "@/app/UI/EmailFormNC"
import { ArrowDownCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import TextCarousel from "@/app/UI/TextCarousel"
import Link from "next/link"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function NoCode(){
    useGSAP(()=> {
        const tl = gsap.timeline();
        tl.to("#ncContact",{
            yPercent:-100,
            duration:1
        })
        ScrollTrigger.create({
            animation: tl,
            trigger: "#ncContent",
            start: "bottom bottom",
            scrub: true,
            pin: true,
        })
    })

    const imageClassIcon = "max-w-10 sm:max-w-12 md:max-w-14 lg:max-w-16";
    
    return (
        <main className="bg-white overflow-x-hidden w-screen text-slate-800">
            <Link href={"#ncHero"}><div className="hidden lg:block z-40 fixed left-10 top-20 text-3xl xl:text-4xl text-white font-bold mix-blend-difference">MSH</div></Link>

            <section id="ncHero" className="flex flex-col lg:flex-row min-h-screen h-auto w-full justify-center items-center bg-gray-700 p-10 lg:p-20 relative">
                {/* <div className="max-w-44 sm:max-w-48 md:max-w-56 lg:max-w-60 xl:max-w-72 mb-10">
                    <Image src="/images/me.png" alt="Leon Man photo" width={500} height={500} className="rounded-full shadow-lg shadow-white border-yellow-700 hover:border"/>
                </div> */}
                <div className="md:ml-20">
                    <p className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-10 bg-gradient-to-r from-yellow-600 via-sky-500 to bg-orange-500 text-transparent bg-clip-text">{contentHome.heroIntro}</p>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-10 bg-gradient-to-r from-yellow-600 via-sky-500 to bg-orange-500 text-transparent bg-clip-text">
                        {`Web Developement / Software Engineering / Machine Learning`}
                    </p>
                    <div className="grid grid-cols-5">

                        <Magnetic><Image src="/images/python.png" alt="Python icon" width={438} height={480} className={imageClassIcon}></Image></Magnetic>
                        
                        <Magnetic><Image src="/images/js.png" alt="JS icon" width={512} height={512} className={imageClassIcon}></Image></Magnetic>
                        
                        <Magnetic><Image src="/images/react.png" alt="React icon" width={640} height={557} className={imageClassIcon}></Image></Magnetic>
                        
                        <Magnetic><Image src="/images/tf.png" alt="TF icon" width={478} height={512} className={imageClassIcon}></Image></Magnetic>
                        
                        <Magnetic><Image src="/images/aws.webp" alt="AWS icon" width={478} height={512} className={imageClassIcon}></Image></Magnetic>
                        
                    </div>
                </div>
                <TextCarousel className="absolute left-0 bottom-20 text-slate-600 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold" text="Passionate | Self Motivated | Teamwork |"/>
            </section>

            <section id="ncContent" className="flex flex-col min-h-screen h-auto w-full justify-start items-start p-10 lg:p-20 2xl:p-40">

                <div className="w-full text-center self-center flex flex-col items-center my-20 md:my-28 lg:my-36 xl:my-40 2xl:my-48">
                    <p className="text-sm lg:text-base 2xl:text-lg border border-slate-800 inline-block px-3 py-2 rounded-3xl mb-5 sm:mb-7">About Me</p>
                    <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-5 sm:mb-10">A Passionate Developer</p>
                    <p className="w-5/6 lg:w-4/6 2xl:w-1/2 text-base lg:text-xl">{contentAbout.aboutMe}</p>
                </div>
                
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">What can I do for You?</p>
                <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-10">
                    <GridBox detail={contentNoCode.webDev}/>
                    <GridBox detail={contentNoCode.sysDev}/>
                    <GridBox detail={contentNoCode.cloud}/>
                    <GridBox detail={contentNoCode.ai}/>
                </div>
                <div className="flex flex-col xl:flex-row h-auto w-full justify-center items-start xl:items-center my-28 sm:my-32 md:my-36 lg:my-40">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 lg:basis-1/3">Experience History</p>
                    <ul className="w-full lg:basis-2/3">
                        <ListItem detail={contentNoCode.experience.FL}/>
                        <ListItem detail={contentNoCode.experience.AP}/>
                        <ListItem detail={contentNoCode.experience.SE}/>
                    </ul>                
                </div>
                <div className="absolute w-full flex justify-center items-center left-0 bottom-20 animate-bounce">
                    <p className="lg:text-lg">Scroll down</p>
                    <ArrowDownCircleIcon className=" h-5 w-5 lg:h-6 lg:w-6 ml-2 lg:ml-3"/>
                </div>
            </section>

            <section id="ncContact" className="absolute bg-gray-900 text-white rounded-t-3xl flex min-h-screen h-auto w-full justify-center items-center p-10 lg:p-20 2xl:p-40">
                <EMailForm/>
            </section>
        </main>
    )
}

function GridBox({detail}){
    return(
        <div className="flex flex-col bg-gradient-to-br from-green-200 to-amber-200 rounded-2xl overflow-hidden hover:shadow-xl">
            <Image src={detail.src} width={detail.width} height={detail.height} alt={detail.alt} className="h-40 object-cover object-top" draggable="false"/>
            
            <div className="p-5">
                <p className="font-semibold text-xl mb-4">{detail.title}</p>
                <p>{detail.explain}</p>
            </div>
        </div>
    )
}

function ListItem({detail}){
    const normalTextClass = "text-sm sm:text-base lg:text-lg";

    return(
        <li className="bg-white flex justify-between py-5 border-b border-slate-600 hover:border-b-2 group">
            <div>
                <div className="font-semibold text-xl sm:text-2xl md:text-3xl mb-4 flex items-center">
                    <ArrowRightIcon className="h-5 w-5 lg:h-6 lg:w-6 mr-3 hidden group-hover:inline-block"/>
                    {detail.title}
                </div>
                <p className={normalTextClass}>{detail.at}</p>
            </div>
            <div className=" text-right">
                <p className={normalTextClass}>{detail.years}</p>
                <p className={normalTextClass}>{detail.mode}</p>
            </div>
        </li>
)
}