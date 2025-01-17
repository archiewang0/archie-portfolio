import * as React from 'react'
import { cn } from '@/lib/utils'
import { FC } from 'react'


export interface ScrollDownProps{
    classname?: string
}

const ScrollDown: FC<ScrollDownProps> = ({
    classname
}) => {
    return (
        <div className={cn(['inline-flex relative animate-bounce' , classname])}>
            <span className=' dark:text-slate-300  absolute opacity-50 -top-1/2 -left-2 text-xs sm:-top-1/3 sm:left-3 sm:text-xl'>scroll</span> 
            <div className='text-3xl sm:text-7xl'>👇</div> 
        </div>
    )
}

ScrollDown.displayName = 'ScrollDown'

export { ScrollDown }