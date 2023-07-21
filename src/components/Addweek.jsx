import React from 'react'
import { MdOutlinePostAdd } from 'react-icons/md';
import data from '../data/week.json'

const Addweek = (props) => {
  const Data = data.weeks;
  return (props.week ? <div className='w-[70%] md:w-1/5 h-2/5 bg-white mx-auto rounded-lg border border-gray-400 absolute top-20 right-36'>
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
        <select name="" id="" className='bg-gray-100 p-2 font-medium rounded-xl border focus:outline-none cursor-pointer' defaultValue={"Order"}>
          <option value="Order" disabled>Order</option>
          <option value="Before">Before</option>
          <option value="After">After</option>
        </select>
      </div>
      <div>
        <select name="" id="" className='bg-gray-100 p-2 font-medium rounded-xl border focus:outline-none cursor-pointer ' defaultValue={"Week"}>
          <option value="Week" disabled>Week</option>
          {Data.map((item) => {
            return (
              <option key={item.id} value={item.week_number}>Week {item.week_number}</option>
            )
          })}
        </select>
      </div>
    </div>
    <div>
      <div className='text-sm text-center italic mt-3'>
        <span className='font-medium'>New Week will be added</span> <span className='text-gray-400'>"order" "week"</span>
      </div>
    </div>
    <div className='flex justify-between my-8 mx-6'>
      <button className='bg-blue-100 text-gray-500 font-normal rounded-xl px-6 py-1'>Cancel</button>
      <button className='bg-gray-500 text-white rounded-xl px-6 py-1'>Create</button>
    </div>
  </div> : <div></div>
  )
}

export default Addweek;