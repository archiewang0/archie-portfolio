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
    <html lang="en"
    suppressHydrationWarning
      className={cn(['bg-white text-slate-900 antialiased', inter.className]) }>
      <body className={'min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'}>

            <div className='deco-top-bg'></div>
            <div className='deco-btm-bg'></div>

            <div className='bg-container'>
                <div className="animate-bg">
                    <div className='animate-bg inset justify-center'>
                        <div className='bg-shap1 bg-tea opacity-25 bg-blur'></div>
                        <div className='bg-shap2 bg-primary opacity-25 bg-blur'></div>
                        <div className='bg-shap1 bg-purple opacity-25 bg-blur'></div>
                    </div>
                </div>
            </div>


          <Providers>
            {children}

            {/* @ts-expect-error Server Component */}
            <Navbar/>
          </Providers>
          
          {/* 留給mobile 更多的高度 */}
          {/* <div className='h-40 md:hidden'></div> */}
          
        </body>
    </html>
  )
}
