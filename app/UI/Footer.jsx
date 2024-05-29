import Image from "next/image";

export default function Footer(){
    const svgClass = " h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 mr-2 fill-white";
    const divGeneral = " text-white h-full flex items-center cursor-pointer py-1 px-3 sm:px-4 md:px-5 flex-shrink-0";

    return (
        <>
            <div className="z-50 fixed bottom-0 bg-black w-full flex justify-end text-sm sm:text-base md:text-lg lg:text-xl border-t border-gray-700">

                <div className="w-0 md:w-5"/>

                <a className={divGeneral}>
                    <p>Coded By Leon Man <span className="hidden sm:inline">Shing Hong</span></p>
                </a>

                <div className="flex-grow"/>

                <a className={divGeneral} href="https://linkedin.com/in/msh9826">
                    <p>LinkedIn</p>
                </a>

                <a className={divGeneral} href="https://github.com/manshing26">
                    <p>Github</p>
                </a>

                <div className="w-0 md:w-5 lg:w-10"/>
            </div>
        </>
    )
}