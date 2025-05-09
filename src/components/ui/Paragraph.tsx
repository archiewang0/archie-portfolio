
import { forwardRef, HTMLAttributes } from 'react'
import {cva, VariantProps} from "class-variance-authority"
import { cn } from '@/lib/utils'

const paragraphVariants = cva(
  'max-w-prose text-slate-700 dark:text-slate-300 mb-2 ',
  {
    variants:{
      size: {
        default: 'text-base sm:text-lg',
        sm: 'text-sm, sm:text-base',
      }
    },
    defaultVariants:{
      size: 'default',
    }
  }
)


interface ParagraphProps 
  extends HTMLAttributes<HTMLParagraphElement> ,
    VariantProps<typeof paragraphVariants> {}
// 設立可以選擇 HTMLParagraphElement 的attribute

const Paragraph = forwardRef<HTMLParagraphElement,ParagraphProps>(
  ({className, size ,children , ...props} , ref)=>{
    return (
      <p ref={ref} {...props} className={cn(paragraphVariants({size , className}))}>
        {children}
      </p>
    )
  }
)
Paragraph.displayName = 'Paragraph'

export default Paragraph