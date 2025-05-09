import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import {Loader2} from "lucide-react"

export const buttonVariants = cva('text-sm active:scale-95 inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900', {
    variants:{
        variant:{
            default: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
            outline: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 hover:bg-slate-100 dark:border-slate-700',
            ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
            link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent'
        },
        size:{
            defulat: 'h-10 py-2 px-4',
            sm: 'h-9 px-2 rounded-md',
            lg: 'h-11 px-8 rounded-md'
        }
    },
    defaultVariants:{
        variant: 'default',
        size: 'defulat'
    }
})

interface ButtonProps extends 
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean
}

// 如果使用 forwardRef 可以使用<> 帶入htmlElement type 有利於開發
const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement,ButtonProps>(({
    className , children , variant , isLoading , size , ...props
} , ref )=>{
    return  <button className={cn(buttonVariants({variant, size ,className}))}
        ref={ref}
        disabled={isLoading}
        {...props}>
            {isLoading? <Loader2 className='mr-2 h-4 w-4 animate-spin' />: null}
            {children}
        </button>
})

Button.displayName = "Button"

export default Button