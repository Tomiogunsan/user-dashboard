import React from 'react'

export default function Sidebar({children}) {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen 
        p-4 bg-white border-r-[1px] flex flex-col
        just '>

        </div>
        <main>{children}</main>
    </div>
  )
}
