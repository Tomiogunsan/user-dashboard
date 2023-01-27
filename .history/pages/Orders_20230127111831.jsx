import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {data} from '../data/Data';


export default function Orders() {
  return (
    <div className='bg-gray-100 min-h-screen '>
      <div className='flex justify-between px-4 pt-4'>
        <h2>Orders</h2>
        <h2>Welcome Back, Tomi</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between'>
      <span>Order</span>
      <span className='sm:text-left text-right'>Status</span>
      <span className='hidden md:grid'>Last Order</span>
      <span className='hidden sm:grid'>Method</span>
    </div>
    <ul>
      
    </ul>
        </div>
      </div>
    </div>
  )
}

