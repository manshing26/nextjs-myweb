"use client";
import { sendMail } from "@/app/util/mail";
import { ArrowPathIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function EMailForm(){
    const lineClass = "py-2 sm:py-3 md:py-5 lg:py-7 border-b border-slate-600";
    const labelClass = "block text-sm sm:text-base lg:text-lg"
    const inputClass = " bg-transparent w-full outline-none placeholder:text-slate-600 text-sm sm:text-base lg:text-lg";

    async function formAction(event){
        const load = document.getElementById("loadingNC");
        const done = document.getElementById("doneNC");

        done.classList.add("hidden");
        load.classList.remove("hidden");
        load.classList.add("inline");
        const result = await sendMail(event);

        load.classList.remove("inline");
        load.classList.add("hidden");

        done.classList.remove("hidden");
        done.classList.add("inline");
    }

    return (
        <form action={formAction} id="contactFormNC" className="w-full sm:w-5/6 lg:w-4/6 xl:w-1/2">
            <p className="inline-block bg-gradient-to-r from-green-300 to-amber-200 text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-10 pb-2">{`Let's connect and grow together`}</p>
            <div className={lineClass}>
                <label htmlFor="clientName" className={labelClass}>{`What's your name?`}</label><br/>
                <input type="text" id="clientName" name="clientName" className={inputClass} placeholder="Peter Pan" required/>
            </div>
            <div className={lineClass}>
                <label htmlFor="clientEmail" className={labelClass}>{`What's your email?`}</label><br/>
                <input type="email" id="clientEmail" name="clientEmail" className={inputClass} placeholder="peterpan@gmail.com" required/>
            </div>
            <div className={lineClass}>
                <label htmlFor="clientMessage" className={labelClass}>{`Your message?`}</label><br/>
                <textarea rows={"4"} id="clientMessage" name="clientMessage" className={inputClass} placeholder="Hi Leon! I want to know more about..." required/>
            </div>
            <button type="submit" id="submitBtnNC" className="text-gray-900 bg-gradient-to-br from-green-300 to-amber-200 font-semibold text-sm sm:text-base lg:text-lg mt-5 cursor-pointer rounded-lg px-3 py-2 lg:rounded-xl lg:px-4 lg:py-3 2xl:px-5 2xl:py-4 hover:text-slate-600">
                {"Send Message"}
            </button>
            <ArrowPathIcon id="loadingNC" className="h-7 w-7 lg:h-10 lg:w-10 hidden ml-3 animate-spin"/>
            <CheckIcon id="doneNC" className="h-7 w-7 lg:h-10 lg:w-10 hidden ml-3"/>
        </form>
    )
}