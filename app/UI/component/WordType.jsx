export function LineNum({num, change}){
    const common = " text-white pr-2 mr-3 sm:mr-4 md:mr-5 lg:mr-10 lg:pr-4 xl:mr-12 2xl:mr-14 2xl:pr-6 border-r-4 lg:border-r-8 hidden sm:inline"
    if (change) {
        return <span className= {common + " border-blue-600"}>{num}</span>
    } else {
        return <span className={common + " border-transparent"}>{num}</span>
    }
    
}

export function TypeConst(){
    return <span className=" text-blue-400">{"const "}</span>
}

export function TypeVar(){
    return <span className=" text-blue-400">{"var "}</span>
}

export function KeyConst({keyName}){
    return <span className="text-blue-600">{keyName+" "}</span>
}

export function KeyVar({keyName, nospace}){
    if (nospace){
        return <span className="text-blue-300">{keyName}</span>
    } else {
        return <span className="text-blue-300">{keyName+" "}</span>
    }
}

export function EqualSign(){
    return <span className="text-white ">{"= "}</span>
}

export function Comment({text}){
    return <span className="text-emerald-700">{text}</span>
}

export function SemiColon(){return(<span className="text-white">;</span>)}

export function Colon(){return(<span className="text-white">{":"}</span>)}

export function Comma(){return(<span className="text-white">{","}</span>)}

export function CurlyBrackets({children}) {
    return <span className=" text-yellow-500">{"{ "}{children}{" }"}</span>
}

export function CurlyBracketL({colorClass}) {
    return <span className={colorClass}>{"{"}</span>
}

export function CurlyBracketR({colorClass}) {
    return <span className={colorClass}>{"}"}</span>
}

export function SquareBracketL({colorClass}) {
    return <span className={colorClass}>{"["}</span>
}

export function SquareBracketR({colorClass}) {
    return <span className={colorClass}>{"]"}</span>
}

export function Space(){
    return <span className=" text-transparent">{"_"}</span>
}

export function Indent(){
    return (
        <>
            <span className=" text-transparent hidden md:inline">{"__"}</span><span className=" text-transparent md:hidden">{"_"}</span>
        </>
    )
}

export function PyYellow({text}){
    return (
        <span className=" text-yellow-200">{text}</span>
    )
}