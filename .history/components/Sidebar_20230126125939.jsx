import Link from 'next/link'
import React from 'react'
import {RxSketchLogo } from 'react-icons/rx'

export default function Sidebar({children}) {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen 
        p-4 bg-white border-r-[1px] flex flex-col
        justify-between '>
            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div className='bg-purple-900 text-white p-3 rounded'>
                        <RxSketchLogo size={20} />
                    </div>
                </Link>
            </div>
        </div>
        <main className='ml-20 w-full'>
            {children}
        </main>
    </div>
  )
}
