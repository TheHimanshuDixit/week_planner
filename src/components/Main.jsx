import React from 'react'
import { MdOutlinePostAdd } from 'react-icons/md';

const Main = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col md:flex-row justify-between my-4 px-8 py-4 w-[90%] md:w-[80%] m-auto bg-white rounded-xl shadow-lg'>
        <div>
          <ul className='flex justify-center'>
            <li className='mr-6 hover:bg-gray-600 bg-gray-100 hover:text-white text-gray-500 px-2 md:px-4 py-2 rounded-2xl text-xs md:text-base cursor-pointer'>Week 1</li>
            <li className='mr-6 hover:bg-gray-600 bg-gray-100 hover:text-white text-gray-500 px-2 md:px-4 py-2 rounded-2xl text-xs md:text-base cursor-pointer'>Week 2</li>
            <li className='mr-6 hover:bg-gray-600 bg-gray-100 hover:text-white text-gray-500 px-2 md:px-4 py-2 rounded-2xl text-xs md:text-base cursor-pointer'>Week 3</li>
            <li className='mr-6 hover:bg-gray-600 bg-gray-100 hover:text-white text-gray-500 px-2 md:px-4 py-2 rounded-2xl text-xs md:text-base cursor-pointer'>Week 4</li>
          </ul>
        </div>
        <div className='flex items-center text-gray-500 text-base md:text-lg justify-center cursor-pointer mt-4 md:mt-0'>
          <div className='mr-1'>
            <MdOutlinePostAdd />
          </div>
          <div>
            <h1>Add a new week</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row my-4 py-4 w-[90%] md:w-[80%] m-auto'>
        <div className='bg-gray-100 mb-8 md:mb-0 md:mr-8 md:w-1/4 px-4 md:h-[70vh] rounded-2xl shadow-lg'>Week 1</div>
        <div className='bg-gray-100 md:w-3/4 px-4 md:h-[70vh] rounded-2xl shadow-lg'>You are free to create UI</div>
      </div>
    </div>
  )
}

export default Main