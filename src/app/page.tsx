
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
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['vietnamese'] })

// const inter = Inter({ subsets: ['latin'] })

// 定義該頁面的seo
export const metadata: Metadata = {
  title: '查詢相似字 API | Home',
  description: "免費並且開源的同義字API"
}
export default function Home() {
    return <div className=' relative h-screen flex items-center justify-center overflow-x-hidden'>
        <div className=' container max-w-7xl mx-auto w-full h-full'>
            <div className=' h-full gap-6 flex flex-col justify-center items-start'>
                <TypingCodeAnimate classname={`sm:text-7xl sm:leading-relaxed text-3xl`} animated code={HomePageCode} show/>

                <div>
                    <p className=' flex'>
                        <span className='mr-5'>Contact</span>  
                        <a className=' mr-5' href='https://www.google.com' target='_bank'>LinkedIn</a> 
                        <a href='https://www.google.com' target='_bank'>Cake</a>
                    </p>
                </div>
                
                <AccordionSection />

            </div>
        </div>
    </div>
}
