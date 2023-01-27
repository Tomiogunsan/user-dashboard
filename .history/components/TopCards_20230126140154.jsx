import React from 'react'

export default function TopCards() {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div
        className="lg:col-span-2 col-span-1 bg-white flex justify-center
        w-full border p-4 rounded-lg"
      >
        <div className="flex flex-col w-full pb-4">
          <p>$7,846</p>
          <p>Daily Revenue</p>
        </div>
      </div>
      <div
        className="lg:col-span-2 col-span-1 bg-white flex justify-center
        w-full border p-4 rounded-lg"
      >
        <div className="flex flex-col w-full pb-4">
          <p className='text-2xl font-bold'>$7,846</p>
          <p children>Daily Revenue</p>
        </div>
      </div>
      <div
        className=" bg-white flex justify-center
        w-full border p-4 rounded-lg"
      >
        <div className="flex flex-col w-full pb-4">
          <p>$7,846</p>
          <p>Daily Revenue</p>
        </div>
      </div>
    </div>
  )
}
;<div className="flex flex-col w-full pb-4"></div>
