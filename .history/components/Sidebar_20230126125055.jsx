import React from 'react'

export default function Sidebar({children}) {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-white first-letter:'>

        </div>
        <main>{children}</main>
    </div>
  )
}
