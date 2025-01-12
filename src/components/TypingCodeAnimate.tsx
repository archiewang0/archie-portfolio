"use client"
// 使用到useState 會需要使用 'use client' 來判斷是client side


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
}

const TypingCodeAnimate: FC<CodeProps> = ({
    code,
    show,
    classname,
    animated,
    animationDelay
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
                    }
                }, 15)

                return ()=>clearInterval(interValid)
            }, animationDelay || 150)
        }
    },[code, show , animated ,animationDelay ])

    // 因為Hightlight 會改變程式語言的顏色, theme 參數會帶入他自己 PrismTheme = lightTheme , darkTheme
    return <pre  className={'dark:text-slate-50 ' +classname}>{text}</pre>
}

export default TypingCodeAnimate