import React from 'react'

export default function Sidebar({children}) {
  return (
    <div className='flex'>
        
        <main>{children}</main>
    </div>
  )
}
