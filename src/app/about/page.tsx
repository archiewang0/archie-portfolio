"use client"
// import { FC } from 'react'
import type { Metadata } from 'next'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import DocumentationTabs from '@/components/DocumentationTabs'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
const inter = Inter({ subsets: ['vietnamese'] })
import ExperienceAccordion from './Accordion'


const page = () => {
  return <div className=' container max-w-7xl mx-auto mt-12'>
    <div className='flex justify-center'>
      <LargeHeading >Archie Wang</LargeHeading>
    </div>

    <div className=' flex w-full mt-20 gap-6'>

      <div className=' w-1/2 pt-2'>
        <div>
          <h3 className={cn(['text-2xl text-stone-800 dark:text-slate-300 mb-6 font-black', inter.className])} id='work'>About Me.</h3>
          <Paragraph>
            {`As a passionate front-end engineer, I specialize in creating responsive and user-friendly web applications. My expertise lies in modern JavaScript frameworks, particularly React and Next.js, complemented by my proficiency in Tailwind CSS for efficient styling. I'm dedicated to crafting clean, performant code and staying updated with the latest web technologies to deliver exceptional user experiences.`}
          </Paragraph>

          <hr className=" opacity-40  h-px bg-black mt-10 mb-10 "/>

          <h3 className={cn(['text-2xl text-stone-800 dark:text-slate-300 mb-6 font-black', inter.className])} id='work'>Experience.</h3>
          

          <ExperienceAccordion/>
            {/* 
            <div className='mt-10'>
              <p className='opacity-80 text-xs'>2023 JUL - NOW</p>
              <p className={cn([' text-xl font-semibold' , inter.className])}>JET OPTOELECTRONICS</p>
              <p className='ml-4 mt-2'>
                Angular / Tailwind / Angular Material / Scss / Express / Sequelize.js / Zod / Typescript / PostgresSQL / AWS / Gitlab-CICD<br/>
                - 開發客戶端充電樁充電網頁<br/>
                - 與設計師協同合作, 分析競品的UX流程並與設計師討論調整方案<br/>
                - 金流微服務的擴增第三方支付的功能<br/>
                - 客戶微服務的擴增第三方登入的功能<br/>
                - 製作UML的類圖以及用例圖來與團隊溝通微服務的開發方向<br/>
                - 建置AWS建置EC2,撰寫Gitlab-CICD讓微服務以及前端webapp能夠成功部屬<br/>
                - 撰寫nginx設定檔案可以讓前端webapp可以被訪問<br/>
              </p>
            </div>

            <div className='mt-10'>
              <p className='opacity-80 text-xs'>2023 JUL - NOW</p>
              <p className={cn([' text-xl font-semibold' , inter.className])}>JET OPTOELECTRONICS</p>
              <p className='ml-4 mt-2'>
                Angular / Tailwind / Angular Material / Scss / Express / Sequelize.js / Zod / Typescript / PostgresSQL / AWS / Gitlab-CICD<br/>
                - 開發客戶端充電樁充電網頁<br/>
                - 與設計師協同合作, 分析競品的UX流程並與設計師討論調整方案<br/>
                - 金流微服務的擴增第三方支付的功能<br/>
                - 客戶微服務的擴增第三方登入的功能<br/>
                - 製作UML的類圖以及用例圖來與團隊溝通微服務的開發方向<br/>
                - 建置AWS建置EC2,撰寫Gitlab-CICD讓微服務以及前端webapp能夠成功部屬<br/>
                - 撰寫nginx設定檔案可以讓前端webapp可以被訪問<br/>
              </p>
            </div>

            <div className='mt-10'>
              <p className='opacity-80 text-xs'>2023 JUL - NOW</p>
              <p className={cn([' text-xl font-semibold' , inter.className])}>JET OPTOELECTRONICS</p>
              <p className='ml-4 mt-2'>
                Angular / Tailwind / Angular Material / Scss / Express / Sequelize.js / Zod / Typescript / PostgresSQL / AWS / Gitlab-CICD<br/>
                - 開發客戶端充電樁充電網頁<br/>
                - 與設計師協同合作, 分析競品的UX流程並與設計師討論調整方案<br/>
                - 金流微服務的擴增第三方支付的功能<br/>
                - 客戶微服務的擴增第三方登入的功能<br/>
                - 製作UML的類圖以及用例圖來與團隊溝通微服務的開發方向<br/>
                - 建置AWS建置EC2,撰寫Gitlab-CICD讓微服務以及前端webapp能夠成功部屬<br/>
                - 撰寫nginx設定檔案可以讓前端webapp可以被訪問<br/>
              </p>
            </div>

            <div className='mt-10'>
              <p className='opacity-80 text-xs'>2023 JUL - NOW</p>
              <p className={cn([' text-xl font-semibold' , inter.className])}>JET OPTOELECTRONICS</p>
              <p className='ml-4 mt-2'>
                Angular / Tailwind / Angular Material / Scss / Express / Sequelize.js / Zod / Typescript / PostgresSQL / AWS / Gitlab-CICD<br/>
                - 開發客戶端充電樁充電網頁<br/>
                - 與設計師協同合作, 分析競品的UX流程並與設計師討論調整方案<br/>
                - 金流微服務的擴增第三方支付的功能<br/>
                - 客戶微服務的擴增第三方登入的功能<br/>
                - 製作UML的類圖以及用例圖來與團隊溝通微服務的開發方向<br/>
                - 建置AWS建置EC2,撰寫Gitlab-CICD讓微服務以及前端webapp能夠成功部屬<br/>
                - 撰寫nginx設定檔案可以讓前端webapp可以被訪問<br/>
              </p>
            </div> */}

        </div>
      </div>

      <div className=' w-1/2 flex flex-col items-center '>
          <DocumentationTabs></DocumentationTabs>
      </div>

    </div>
  </div>
}

export default page