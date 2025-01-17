"use client"
import { FC } from 'react'
import { buttonVariants } from './ui/Button'
// import SignInButton from './SignInButton'
import React, {useState} from 'react'
import type{ Session } from 'next-auth'
import Icons from './Icons'
import { useTheme , } from 'next-themes'
// import SignOutButton from './SignOutButton'
import ThemeToggle from './ThemeToggle'
import { createTheme ,ThemeProvider } from '@mui/material'

import Link from 'next/link'

const MobileMenu: FC= () => {
    const [open,setOpen] = useState<boolean>(false)
    const { setTheme } = useTheme()
    return <div className={`md:hidden flex relative`} >

        <button 
            className={`${buttonVariants({variant: 'ghost'})}`}
            onClick={ ()=>{setOpen((pre)=>!pre)}}>
            <Icons.Menu />
        </button>

        {/* 白色模式 黑色模式 */}
        {   open?(        
            <div className='dark:text-slate-300 absolute bg-slate-50 dark:bg-gray-900 dark:border-slate-600 border rounded shadow p-5 bottom-0 translate-y-full right-0'>
                <div className=' text-center' onClick={()=>{setOpen(pre=>!pre)}}>
                    <div className=' mb-2'>Theme</div>

                    <button onClick={()=>{setTheme('light')}} className={`${buttonVariants({variant: 'ghost'})} flex`}>
                        <Icons.Sun className='mr-2 h-4 w-4'/>
                        <span>Light</span>
                    </button>

                    <button onClick={()=>{setTheme('dark')}} className={`${buttonVariants({variant: 'ghost'})} flex`}>
                        <Icons.Moon className='mr-2 h-4 w-4'/>
                        <span>Dark</span>
                    </button>

                    <button onClick={()=>{setTheme('system')}} className={`${buttonVariants({variant: 'ghost'})} flex`}>
                        <Icons.Laptop className='mr-2 h-4 w-4'/>
                        <span>System</span>
                    </button>

                    <hr className='dark:opacity-70 mt-2 mb-2'/>

                    <Link href="/documentation" className={buttonVariants({variant: 'ghost'})}>
                        Documentation
                    </Link>

                    <Link href="/about" className={buttonVariants({variant: 'ghost'})}>
                        About
                    </Link>

                    
                    {/* <SignInButton/> */}
                </div>
            </div>) : null
        }
    </div>
}

export default MobileMenu