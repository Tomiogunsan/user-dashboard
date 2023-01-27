import React from 'react'
import {data} from '../data/data.js'
import {FaShoppingBag} from 'react-icons/fa'
export default function RecentOrder() {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh]
    m-auto p-4 border rounded-lg bg-white overflow-scroll'>
        <h1>Recent Orders</h1>
        <ul>
            {data.map((order, id) => {
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'> 
                    <div>
                        <
                    </div>
                </li>
            })}
        </ul>
    </div>
  )
}
