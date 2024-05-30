"use client"
import { contentAbout } from "@/content";
import { LineNum, KeyVar, Indent, Space, Colon, Comma, CurlyBracketL, CurlyBracketR, SquareBracketL, SquareBracketR } from "../UI/component/WordType";
import { sourceCodePro } from "@/app/UI/fonts";
import { useState } from "react";

export default function About() {
    const lineClass = "mb-2 sm:mb-3 md:mb-5 lg:mb-7 xl:mb-9 " + sourceCodePro.className;
    const [detailOpen,setDetailOpen] = useState(false);

    function detailToggle(){
        setDetailOpen(!detailOpen);
    }

    return (
      <main id="about" className="min-h-screen w-full flex flex-col pt-10 pl-4 sm:pl-7 lg:pt-20 lg:pl-10 xl:pl-14 bg-gray-900 text-nowrap overflow-x-scroll">
        <div className="w-full h-11 sm:h-12 md:h-14" />
        <div className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-quot mb-20">
            <div className={lineClass}>
                <Space/><LineNum num={1}/>
                <CurlyBracketL colorClass="text-yellow-500"/>
            </div>
            <div className={lineClass}>
                <Space/><LineNum num={2}/>
                <Indent />
                <KeyVar nospace={true} keyName={`"about_me"`}/>
                <Colon />
                <div className={"inline" + (detailOpen?" hidden":"")}>
                    {`"..."`}
                    <Comma />
                </div>
                <span onClick={detailToggle} id="expandBtn" className="cursor-pointer text-gray-700 font-light mx-3 sm:mx-4 md:mx-5 lg:mx-10 xl:mx-12 2xl:mx-14 border border-gray-700 rounded-lg px-2 py-1 lg:rounded-xl lg:px-3 lg:py-2 2xl:px-4 2xl:py-3 hover:text-gray-500 hover:border-gray-500">
                    {(detailOpen?"Collapse":"Expand")}
                </span>
            </div>
            <div className={lineClass + " w-2/3 2xl:w-4/5 text-wrap ml-10 leading-tight sm:ml-24 md:ml-32 lg:ml-44 xl:ml-56 2xl:ml-64" + (detailOpen?" inline-block":" hidden")}>
                <span>{`"${contentAbout.aboutMe}"`}</span><Comma/>
            </div>
            <div className={lineClass}>
            <Space/><LineNum num={3}/>
                <Indent />
                <KeyVar nospace={true} keyName={`"expertise"`}/>
                <Colon />
                <SquareBracketL colorClass="text-fuchsia-500"/>
            </div>
            <div className={lineClass}>
            <Space/><LineNum num={4}/>
                <Indent /><Indent />
                {`"Python"`}
                <Comma />
                {`"React"`}
                <Comma />
                {`"Tensorflow"`}
                <Comma />
                {`"AWS"`}
                <Comma />
            </div>
            <div className={lineClass}>
                <Space/><LineNum num={5}/>
                <Indent />
                <SquareBracketR colorClass={"text-fuchsia-500"}/>
                <Comma/>
            </div>
            <div className={lineClass}>
            <Space/><LineNum num={6}/>
                <Indent />
                <KeyVar nospace={true} keyName={`"experience"`}/>
                <Colon />
                <SquareBracketL colorClass="text-fuchsia-500"/>
            </div>
            <div className={lineClass}>
                <Space/><LineNum num={7}/>
                <Indent /><Indent />
                <CurlyBracketL colorClass={"text-blue-600"}/>
            </div>
            <div className={lineClass}>
                <Space/><LineNum num={8}/>
                <Indent /><Indent /><Indent />
                <KeyVar nospace={true} keyName={`"title"`}/>
                <Colon />
                {`"Freelancer"`}
                <Comma/>
            </div>
            <div className={lineClass}>
                <Space/>
                <LineNum num={9}/>
                <Indent /><Indent /><Indent />
                <KeyVar nospace={true} keyName={`"years"`}/>
                <Colon />
                {`"2023-Current"`}
            </div>
            <div className={lineClass}>
                <LineNum num={10}/>
                <Indent /><Indent />
                <CurlyBracketR colorClass={"text-blue-600"}/>
                <Comma />
            </div>
            <div className={lineClass}>
                <LineNum num={11}/>
                <Indent /><Indent />
                <CurlyBracketL colorClass={"text-blue-600"}/>
            </div>
            <div className={lineClass}>
                <LineNum num={12}/>
                <Indent /><Indent /><Indent />
                <KeyVar nospace={true} keyName={`"title"`}/>
                <Colon />
                {`"Analyst Programmer"`}
                <Comma/>
            </div>
            <div className={lineClass}>
                <LineNum num={13}/>
                <Indent /><Indent /><Indent />
                <KeyVar nospace={true} keyName={`"work_at"`}/>
                <Colon />
                {`"Integrated Global Solution Limited"`}
                <Comma/>
            </div>
            <div className={lineClass}>
                <LineNum num={14}/>
                <Indent /><Indent /><Indent />
                <KeyVar nospace={true} keyName={`"years"`}/>
                <Colon />
                {`"2022-2023"`}
            </div>
            <div className={lineClass}>
                <LineNum num={15}/>
                <Indent /><Indent />
                <CurlyBracketR colorClass={"text-blue-600"}/>
                <Comma />
            </div>
            <div className={lineClass}>
                <LineNum num={16}/>
                <Indent /><Indent />
                <CurlyBracketL colorClass={"text-blue-600"}/>
            </div>
            <div className={lineClass}>
                <LineNum num={17}/>
                <Indent /><Indent /><Indent />
                <KeyVar nospace={true} keyName={`"title"`}/>
                <Colon />
                {`"Software Engineer"`}
                <Comma/>
            </div>
            <div className={lineClass}>
                <LineNum num={18}/>
                <Indent /><Indent /><Indent />
                <KeyVar nospace={true} keyName={`"work_at"`}/>
                <Colon />
                {`"Universe Action Limited"`}
                <Comma/>
            </div>
            <div className={lineClass}>
                <LineNum num={19}/>
                <Indent /><Indent /><Indent />
                <KeyVar nospace={true} keyName={`"years"`}/>
                <Colon />
                {`"2021-2022"`}
            </div>
            <div className={lineClass}>
                <LineNum num={20}/>
                <Indent /><Indent />
                <CurlyBracketR colorClass={"text-blue-600"}/>
            </div>
            <div className={lineClass}>
                <LineNum num={21}/>
                <Indent />
                <SquareBracketR colorClass={"text-fuchsia-500"}/>
            </div>
            <div className={lineClass}>
                <LineNum num={22}/>
                <CurlyBracketR colorClass={"text-yellow-500"}/>
            </div>
            <div className={lineClass}>
                <LineNum num={23}/>
            </div>
        </div>
      </main>
    );
  }
  