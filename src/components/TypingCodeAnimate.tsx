"use client"


import { FC, useEffect, useState } from 'react'
import {defaultProps, type Language} from "prism-react-renderer"
// 跑出打code的動畫
import { useTheme , } from 'next-themes'
// import darkTheme from "prism-react-renderer/themes/nightOwl"
// import lightTheme from 'prism-react-renderer/themes/nightOwlLight'

// hieghtlight 用來render 程式語言的時候變色使用的
import Highlight from 'prism-react-renderer'


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