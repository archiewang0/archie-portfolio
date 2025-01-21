"use client"


import { FC, useEffect, useState } from 'react'



interface CodeProps {
    code: string
    show: boolean,
    classname?: string
    animationDelay?: number   //每字動畫時差
    animated?: boolean    //打字動畫
    animationFinsihEvent?: ()=>void
}

const TypingCodeAnimate: FC<CodeProps> = ({
    code,
    show,
    classname,
    animated,
    animationDelay,
    animationFinsihEvent
}) => {
    const [text, setText] = useState(animated? '' : code)
    
    useEffect(()=>{
        if (!animated) animationFinsihEvent && animationFinsihEvent()

        if(show && animated) {
            let i = 0
            setTimeout(()=>{
                const interValid = setInterval(()=>{
                    setText(code.slice(0, i))
                    i++
                    if(i> code.length){
                        clearInterval(interValid)
                        animationFinsihEvent && animationFinsihEvent()
                    }
                }, 15)

                return ()=>clearInterval(interValid)
            }, animationDelay || 150)
        }
    },[code, show , animated ,animationDelay , animationFinsihEvent])

    return <pre  className={'dark:text-slate-50 ' +classname}>{text}</pre>
}

export default TypingCodeAnimate