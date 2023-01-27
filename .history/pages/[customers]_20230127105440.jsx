import React from 'react'
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import {data} from '../data/Data'
export default function Customers() {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
          <h2>Customers</h2>
          <h2>Welcome Back, Tomi</h2>
        </div>
        <div className='w-full m-auto p-4 border rounded-lg
         bg-white overflow-y-auto'>
          <div className='my-3 p-2 md:grid-cols-4 grid sm:grid-cols-3 grid-cols-2 items-center 
          justify-center cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md'>Last Order</span>
            <span>Method</span>
            
          </div>
        </div>
    </div>
  )
}
