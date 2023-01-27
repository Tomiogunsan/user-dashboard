import React from 'react'

export default function Sidebar({children}) {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4'>

        </div>
        <main>{children}</main>
    </div>
  )
}
