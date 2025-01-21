"use client"
// import { FC } from 'react'
import type { Metadata } from 'next'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import DocumentationTabs from '@/components/DocumentationTabs'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import ExperienceAccordion from './ExperienceAccordion'
import { experience } from '@/helpers/experience'
import { useTheme } from 'next-themes'

const inter = Inter({ subsets: ['vietnamese'] })

const About = () => {
  const {theme: applicationTheme} = useTheme()

  const datas = experience(applicationTheme === 'system' ? 'light' : applicationTheme)

  return <div className='  container max-w-7xl mx-auto mt-12'>
    <div className='flex justify-center'>
      <LargeHeading >Archie Wang</LargeHeading>
    </div>

    <div className=' flex sm:flex-nowrap flex-wrap w-full mt-20 gap-6'>

      <div className=' w-full sm:w-1/2 pt-2'>
        <div>
          <h3 className={cn(['text-2xl text-stone-800 dark:text-slate-300 mb-6 font-black', inter.className])} id='work'>About Me.</h3>
          <Paragraph>
            {`I am a front-end developer focused on creating efficient applications using React and Angular to develop outstanding web applications. I excel at leveraging Tailwind CSS to achieve refined visual effects. I place great importance on code readability and maintainability, while continuously learning and applying the latest front-end technologies, as well as back-end skills, to deliver elegant and seamless digital experiences for users.`}
          </Paragraph>

          <hr className=" opacity-40  h-px bg-black mt-10 mb-10 "/>

          <h3 className={cn(['text-2xl text-stone-800 dark:text-slate-300 mb-6 font-black', inter.className])} id='work'>Experience.</h3>

          <ExperienceAccordion datas={datas.datas}/>

        </div>
      </div>

      <div className=' w-full mt-10 sm:mt-0 sm:w-1/2  min-h-96  flex flex-col items-center '>
          <DocumentationTabs></DocumentationTabs>
      </div>

    </div>
  </div>
}

export default About