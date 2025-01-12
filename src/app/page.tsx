
// import { Inter } from 'next/font/google'
import Image from 'next/image'
import type { Metadata } from 'next'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import Link from 'next/link'
import Code from '@/components/Code'
import { HomePageCode } from '@/helpers/documentation-code'
import TypingCodeAnimate from '@/components/TypingCodeAnimate'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['vietnamese'] })

// const inter = Inter({ subsets: ['latin'] })

// 定義該頁面的seo
export const metadata: Metadata = {
  title: '查詢相似字 API | Home',
  description: "免費並且開源的同義字API"
}
export default function Home() {
    return <div className=' relative h-screen flex items-center justify-center overflow-x-hidden'>
        <div className=' container max-w-7xl mx-auto w-full h-full'>
        <div className=' h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
            {/* <LargeHeading size='lg' className=' three-d text-black dark:text-light-gold'>
                Easily determine <br/> text similarity
            </LargeHeading>
            <Paragraph className=' max-w-xl lg:text-left'>
                with the text similarity API , you can easily determine the similarity between two pieces of text with a free{' '}
            </Paragraph> */}

            {/* <Code animated language='python' code={HomePageCode} show/> */}
            <TypingCodeAnimate classname={`text-7xl leading-relaxed `} animated code={HomePageCode} show/>

            {/* <div className=' relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
                <Image priority className=' img-shadow' quality={100} style={{objectFit:'contain'}} fill src='/typewriter.png' alt='typewriter'/>
            </div> */}
            </div>
        </div>
    </div>
}
