
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
    return <>
        
        <div className=' relative z-10 container max-w-7xl mx-auto w-full '>

            {/* 主視覺 */}
            <div className=' relative h-screen-1/2 gap-6 flex flex-col justify-start items-start'>
                <div className=' h-1/4 sm:h-1/5'></div>
                <TypingCodeAnimate classname={`sm:text-7xl sm:leading-relaxed text-3xl`} animated code={HomePageCode} show/>

            </div>

            {/* 作品集 */}
            <div className=' mt-10'>
                <h3 className={cn(['text-3xl dark:text-slate-300 mb-8 font-black', inter.className])} id='work'>Work.</h3>
                <AccordionSection />
            </div>

            {/* 聯絡我們 */}
            <div  className=' mt-10'>
                <h3 className={cn(['text-3xl dark:text-slate-300 mb-8 font-black', inter.className])} id='contact'>Contact.</h3>

                <p className='flex'>
                    <a className='dark:text-slate-300 mr-5' href='https://www.google.com' target='_bank'>LinkedIn</a> 
                    <a className='dark:text-slate-300' href='https://www.google.com' target='_bank'>Cake</a>
                </p>
            </div>
        </div>
    </>
}
