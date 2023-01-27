import React from 'react'

export default function Sidebar({children}) {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-scree'>

        </div>
        <main>{children}</main>
    </div>
  )
}
