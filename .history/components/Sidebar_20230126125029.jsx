import React from 'react'

export default function Sidebar({children}) {
  return (
    <div className='flex'>
        <div className='fixed w-20'>

        </div>
        <main>{children}</main>
    </div>
  )
}
