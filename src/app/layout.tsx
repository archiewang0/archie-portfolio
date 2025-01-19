import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Providers from '@/components/Providers'
import Navbar from '@/components/Navbar'
import { useTheme } from 'next-themes'

//google 字體
const inter = Inter({ subsets: ['vietnamese'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const { theme } = useTheme()
  // console.log(theme)

  return (
    // className=' relative pb-60  flex items-center justify-center overflow-x-hidden'
    <html lang="en"
      suppressHydrationWarning
      className={cn(['bg-white text-slate-900 antialiased', inter.className]) }>
      <body className={'min-h-screen bg-slate-50 dark:bg-slate-900 antialiased pb-32 relative'}>



            <div className='bg-container'>
                <div className="animate-bg">
                    <div className=' overflow-hidden animate-bg inset justify-center flex-wrap'>
                        <div className='bg-shap1 bg-tea opacity-25 bg-blur'></div>
                        <div className='bg-shap2 bg-primary opacity-25 bg-blur'></div>
                        <div className='bg-shap1 bg-purple opacity-25 bg-blur'></div>
                        <div className='bg-shap3 bg-primary opacity-25 bg-blur'></div>
                        <div className='bg-shap3 bg-green opacity-25 bg-blur'></div>
                    </div>
                </div>
            </div>

            <div className=' z-50 h-full w-full fixed overflow-hidden pointer-events-none'>
              <div className='deco-top-bg'></div>
              <div className='deco-btm-bg'></div>
            </div>

          <Providers>
            {/* @ts-expect-error Server Component */}
            <Navbar/>
            {children}
          </Providers>
          
          {/* 留給mobile 更多的高度 */}
          {/* <div className='h-40 md:hidden'></div> */}
          
        </body>
    </html>
  )
}
