"use client";
import { sendMail } from "@/app/util/mail";
import { ArrowPathIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function EMailForm(){
    const lineClass = "py-4 sm:py-5 md:py-6 lg:py-8 border-b border-gray-700";
    const labelClass = "block text-sm sm:text-base lg:text-lg text-gray-400 mb-2"
    const inputClass = "bg-transparent w-full outline-none placeholder:text-gray-600 text-white text-base sm:text-lg lg:text-xl focus:border-indigo-500 transition-colors";

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
        <form action={formAction} id="contactFormNC" className="w-full">
            <p className="text-sm lg:text-base text-gray-500 uppercase tracking-widest mb-4">Get In Touch</p>
            <p className="text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Let&apos;s Work Together</p>
            <p className="text-gray-400 text-lg lg:text-xl mb-12">Have a project in mind? I&apos;d love to hear from you.</p>

            <div className={lineClass}>
                <label htmlFor="clientName" className={labelClass}>{`Your Name`}</label>
                <input type="text" id="clientName" name="clientName" className={inputClass} placeholder="John Doe" required/>
            </div>
            <div className={lineClass}>
                <label htmlFor="clientEmail" className={labelClass}>{`Email Address`}</label>
                <input type="email" id="clientEmail" name="clientEmail" className={inputClass} placeholder="john@example.com" required/>
            </div>
            <div className={lineClass}>
                <label htmlFor="clientMessage" className={labelClass}>{`Your Message`}</label>
                <textarea rows={"4"} id="clientMessage" name="clientMessage" className={inputClass} placeholder="Tell me about your project..." required/>
            </div>

            <div className="flex items-center mt-8">
                <button type="submit" id="submitBtnNC" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-base lg:text-lg cursor-pointer rounded-xl px-8 py-4 hover:opacity-90 hover:scale-105 transition-all duration-300 glow-hover">
                    Send Message
                </button>
                <ArrowPathIcon id="loadingNC" className="h-7 w-7 lg:h-10 lg:w-10 hidden ml-4 animate-spin text-indigo-400"/>
                <CheckIcon id="doneNC" className="h-7 w-7 lg:h-10 lg:w-10 hidden ml-4 text-green-400"/>
            </div>

            <div className="flex gap-6 mt-16 text-gray-500">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            </div>
        </form>
    )
}
