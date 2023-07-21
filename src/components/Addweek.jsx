import React from 'react'
import { MdOutlinePostAdd } from 'react-icons/md';

const Addweek = () => {
  return (
    <div className=' w-[70%] md:w-1/5 h-2/5 bg-white mx-auto rounded-lg border border-gray-400'>
      <div className='flex items-center border-b-2 justify-between text-orange-500 text-2xl font-semibold px-4 py-4 rounded-xl shadow-md'>
        <div>
          <h1>Add New Week</h1>
        </div>
        <div>
          <MdOutlinePostAdd />
        </div>
      </div>
      <div className='flex justify-between items-center p-4'>
        <div>
          <select name="" id="" className='bg-gray-100 p-2 font-medium rounded-xl border focus:outline-none cursor-pointer'>
            <option className='' value="">Before</option>
            <option className='' value="">After</option>
          </select>
        </div>
        <div>
          <select name="" id="" className='bg-gray-100 p-2 font-medium rounded-xl border focus:outline-none cursor-pointer'>
            <option value="">Week 1</option>
            <option value="">Week 2</option>
            <option value="">Week 3</option>
            <option value="">Week 4</option>
            <option value="">Week 5</option>
          </select>
        </div>
      </div>
      <div>
        <div className='text-xs text-center italic'>
          <span className='font-medium'>New Week will be added</span> <span className='text-gray-400'>"order" "week"</span>
        </div>
      </div>
      <div className='flex justify-between my-8 mx-6'>
        <button className='bg-blue-100 text-gray-500 font-normal rounded-xl px-6 py-1'>Cancel</button>
        <button className='bg-gray-500 text-blue-100 rounded-xl px-6 py-1'>Create</button>
      </div>
    </div>
  )
}

export default Addweek;