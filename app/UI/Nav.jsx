"use client";
import { sitemap } from "@/sitemap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function NavBar(){
    const imageClass = " h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 mr-2 lg:mr-3";
    const divGeneral = " h-full items-center cursor-pointer px-3 sm:px-4 md:px-5 flex-shrink-0";
    const divCurrent = " bg-gray-900 border-t sm:border-t-2 lg:border-t-4 border-blue-500 flex";
    const divNotCurrent = " border border-gray-700 hidden sm:flex";
    const markerClass = " font-light text-xs md:text-sm lg:text-base"
    const menuGeneral = " h-full flex items-center cursor-pointer px-5 my-1 flex-shrink-0";
    const menuCurrent = " bg-blue-600 rounded-md";
    const menuNotCurrent = " ";

    const [menuOpen,setMenuOpend] = useState(false)

    function menuToggle(){
        setMenuOpend(!menuOpen);
        if (!menuOpen){
            document.getElementById("dropDownMenu").classList.remove('invisible');
        } else {
            document.getElementById("dropDownMenu").classList.add('invisible');
        }
    }

    return (
        <>
            <div className="z-50 fixed bg-black w-full h-11 sm:h-12 md:h-14 flex justify-start text-sm sm:text-base md:text-lg lg:text-xl overflow-x-hidden">

                <div className={"text-white" + divGeneral + " border border-gray-500 flex sm:hidden"} onClick={menuToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <Link href={sitemap.home} className={"text-amber-100" + divGeneral + (sitemap.home === usePathname() ? divCurrent : divNotCurrent)}>
                    <Image src="/images/js.png" alt="js icon" width={512} height={512} className={imageClass}></Image>
                    <p>Home.js <span className={markerClass}>M</span></p>
                </Link>

                <Link href={sitemap.about} className={"text-white" + divGeneral + (sitemap.about === usePathname() ? divCurrent : divNotCurrent)}>
                    <Image src="/images/json.png" alt="json icon" width={512} height={512} className={imageClass}></Image>
                    <p>About.json</p>
                </Link>

                <Link href={sitemap.contact} className={"text-emerald-500" + divGeneral + (sitemap.contact === usePathname() ? divCurrent : divNotCurrent)}>
                    <Image src="/images/python.png" alt="python icon" width={438} height={480} className={imageClass}></Image>
                    <p>Contact.py <span className={markerClass}>U</span></p>
                </Link>

                <div className="border border-gray-700 flex-grow"/>
            </div>
            <div id="dropDownMenu" className="z-50 fixed top-11 left-0 w-full p-2 rounded-b-xl bg-gray-700 invisible">
                    <Link href={sitemap.home} className={"text-amber-100" + menuGeneral + (sitemap.home === usePathname() ? menuCurrent : menuNotCurrent)} onClick={menuToggle}>
                        <Image src="/images/js.png" alt="js icon" width={512} height={512} className={imageClass}></Image>
                        <p>Home.js <span className={markerClass}>M</span></p>
                    </Link>

                    <Link href={sitemap.about} className={"text-white" + menuGeneral + (sitemap.about === usePathname() ? menuCurrent : menuNotCurrent)} onClick={menuToggle}>
                        <Image src="/images/json.png" alt="js icon" width={512} height={512} className={imageClass}></Image>
                        <p>About.json</p>
                    </Link>

                    <Link href={sitemap.contact} className={"text-emerald-500" + menuGeneral + (sitemap.contact === usePathname() ? menuCurrent : menuNotCurrent)} onClick={menuToggle}>
                        <Image src="/images/python.png" alt="js icon" width={438} height={480} className={imageClass}></Image>
                        <p>Contact.py <span className={markerClass}>U</span></p>
                    </Link>

            </div>
        </>
    )
}