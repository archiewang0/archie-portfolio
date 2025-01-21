import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { buttonVariants } from './ui/Button'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'
import { cn } from '@/lib/utils'

const Navbar = async ({}) => {
    // dark: 是切換成dark mode 時候呈現出來
    return <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-black/20 z-40 top-0 left-0 right-0 h-20 broder-b border-slate-300
     dark:border-slate-700 shadow-sm flex items-center justify-between'>
        <div className=' container max-w-7xl mx-auto w-full flex justify-between items-center '>
            <Link href="/" className={cn([buttonVariants({variant: 'link'}) , 'text-5xl'])}>
                ➆
            </Link>


            <MobileMenu/>

            <div className=' hidden md:flex gap-4'>
                <ThemeToggle></ThemeToggle>

                <Link href="/about" className={buttonVariants({variant: 'ghost'})}>
                    About
                </Link>
            </div>
        </div>
    </div>
}

export default Navbar