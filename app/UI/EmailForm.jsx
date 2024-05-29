"use client";
import { sendMail } from "@/app/util/mail";
import { sourceCodePro } from "@/app/UI/fonts";
import { LineNum, KeyConst, KeyVar, Indent, Colon, Comma, CurlyBracketL, CurlyBracketR, PyYellow, EqualSign, Space} from "../UI/component/WordType";
import { ArrowPathIcon, CheckIcon } from "@heroicons/react/24/outline";


export default function EMailForm(){
    const lineClass = "mb-2 sm:mb-3 md:mb-5 lg:mb-7 xl:mb-9 " + sourceCodePro.className;
    const inputClass = " bg-gray-800 rounded-lg focus:bg-gray-700 w-2/3 md:w-1/2";

    async function formAction(event){
        const load = document.getElementById("loadingC");
        const done = document.getElementById("doneC");

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
        <form action={formAction} id="contactForm">
            <div className={lineClass}>
            <Space/><LineNum num={1}/>
                <KeyVar keyName={"my_email"} />
                <EqualSign/>
                {`"mansh9826@gmail.com"`}
            </div>
            <div className={lineClass}>
                <Space/><LineNum num={2}/>
            </div>

            <div className={lineClass}>
            <Space/><LineNum num={3}/>
                <KeyConst keyName={"async def"} />
                <PyYellow text={"send_message_to_leon"} />
                <span className="text-yellow-500">{"()"}</span>
                <Colon/>
            </div>
            <div className={lineClass}>
            <Space/><LineNum num={4}/>
                <Indent/>
                <KeyVar keyName={"message"} />
                <EqualSign/>
                <CurlyBracketL colorClass={"text-yellow-500"}/>                
            </div>
            <div className={lineClass + " block md:flex md:items-start"}>
            <Space/><LineNum num={5}/>
                <Indent/><Indent/>
                <label htmlFor="clientName">{`"Your_Name"`}</label>
                <Colon/><Space/>
                <div className="inline md:hidden"><br/><LineNum num={" "}/><Indent/><Indent/></div>
                <input type="text" id="clientName" name="clientName" className={inputClass} required autoFocus/>
                <Comma/>
            </div>
            <div className={lineClass + " block md:flex md:items-start"}>
            <Space/><LineNum num={6}/>
                <Indent/><Indent/>
                <label htmlFor="clientEmail">{`"Your_Email"`}</label>
                <Colon/><Space/>
                <div className="inline md:hidden"><br/><LineNum num={" "}/><Indent/><Indent/></div>
                <input type="email" id="clientEmail" name="clientEmail" className={inputClass} required/>
                <Comma/>
            </div>
            <div className={lineClass + " block md:flex md:items-start"}>
            <Space/><LineNum num={7}/>
                <Indent/><Indent/>
                <label htmlFor="clientMessage">{`"Your_Message"`}</label>
                <Colon/><Space/>
                <div className="inline md:hidden"><br/><LineNum num={" "}/><Indent/><Indent/></div>
                <textarea rows={"3"} id="clientMessage" name="clientMessage" className={inputClass} required/>
            </div>
            <div className={lineClass}>
            <Space/><LineNum num={8}/>
                <Indent/>
                <CurlyBracketR colorClass={"text-yellow-500"}/>                
            </div>
            <div className={lineClass}>
            <Space/><LineNum num={9}/>
                <Indent/>
                <span className="text-fuchsia-500">await</span>
                <button type="submit" className="cursor-pointer mx-3 sm:mx-4 md:mx-5 lg:mx-10 xl:mx-12 2xl:mx-14 border-2 lg:border-4 border-gray-700 rounded-lg px-2 py-1 lg:rounded-xl lg:px-3 lg:py-2 2xl:px-4 2xl:py-3 hover:border-gray-500 hover:bg-gray-700">
                    <PyYellow text={"Send"}/>
                    <span className="text-yellow-500">{"("}</span>
                    <span className="text-blue-300">{"message"}</span>
                    <span className="text-yellow-500">{")"} </span>
                </button>
                <ArrowPathIcon id="loadingC" className="stroke-gray-400 h-5 w-5 sm:h-7 sm:w-7 lg:h-10 lg:w-10 xl:h-12 hidden animate-spin"/>
                <CheckIcon id="doneC" className="stroke-gray-400 h-5 w-5 sm:h-7 sm:w-7 lg:h-10 lg:w-10 xl:h-12 hidden"/>
            </div>
            <div className={lineClass}>
                <LineNum num={10}/>
                <Indent/>
                <span className="text-fuchsia-500">return </span>
                <KeyConst keyName={"ASAP"}/>
            </div>
            <div className={lineClass}>
                <LineNum num={11}/>
            </div>

        </form>
    )
}