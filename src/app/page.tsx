
// import { Inter } from 'next/font/google'
import Image from 'next/image'
import type { Metadata } from 'next'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import Link from 'next/link'
import Code from '@/components/Code'
import { HomePageCode } from '@/helpers/documentation-code'
import TypingCodeAnimate from '@/components/TypingCodeAnimate'
import AccordionSection from '@/components/ui/Accordion'
import { ScrollDown } from '@/components/ui/ScrollDown'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
const inter = Inter({ subsets: ['vietnamese'] })

// const inter = Inter({ subsets: ['latin'] })

// 定義該頁面的seo
export const metadata: Metadata = {
  title: '查詢相似字 API | Home',
  description: "免費並且開源的同義字API"
}
export default function Home() {
    return <div className=' relative pb-60  flex items-center justify-center overflow-x-hidden'>
        <div className=' container max-w-7xl mx-auto w-full '>
            <div className=' relative h-screen-1/2 gap-6 flex flex-col justify-start items-start'>
                <div className=' h-1/4 sm:h-1/5'></div>
                <TypingCodeAnimate classname={`sm:text-7xl sm:leading-relaxed text-3xl`} animated code={HomePageCode} show/>

                <div>
                    <p className=' flex'>
                        <span className='dark:text-slate-300 mr-5'>Contact</span>  
                        <a className='dark:text-slate-300 mr-5' href='https://www.google.com' target='_bank'>LinkedIn</a> 
                        <a className='dark:text-slate-300' href='https://www.google.com' target='_bank'>Cake</a>
                    </p>
                </div>

                <ScrollDown classname=' absolute bottom-20 sm:bottom-0 left-1/2 translate-x-1/2'/>
            </div>

            <div>
                <h3 className={cn(['text-3xl dark:text-slate-300 mb-8 font-black', inter.className])} id='work'>Work.</h3>
                <AccordionSection />
            </div>

        </div>
    </div>
}
