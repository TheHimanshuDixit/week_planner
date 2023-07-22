import React, { useState } from 'react'
import { MdOutlinePostAdd } from 'react-icons/md';

const Main = (props) => {
  
  const [weekmod, setWeekmod] = useState(props.Data[0].modules)
  const [weekmodtask, setWeekmodtask] = useState(props.Data[0].modules[0])
  const [bgweek, setBgweek] = useState(props.Data[0].week_number)

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col md:flex-row justify-between my-4 px-8 py-4 w-[90%] md:w-[80%] m-auto bg-white rounded-xl shadow-lg'>
        <div>
          <ul className='flex justify-center'>
            {props.Data.map((item) => {
              return (
                <li onClick={() => {
                  setWeekmod(item.modules);
                  setWeekmodtask(item.modules[0]);
                  setBgweek(item.week_number);
                }} key={item.id} className={`mr-6 hover:bg-gray-400 hover:text-white px-2 md:px-4 py-2 rounded-2xl text-xs md:text-base cursor-pointer ${bgweek === item.week_number ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-600'}`}>Week {item.week_number}</li>
              )
            })}
          </ul>
        </div>
        <div className='flex items-center text-gray-500 text-base md:text-lg justify-center cursor-pointer mt-4 md:mt-0' onClick={() => { props.setWeek(!props.week) }}>
          <div className='mr-1'>
            <MdOutlinePostAdd />
          </div>
          <div>
            <h1>Add a new week</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row my-4 py-4 w-[90%] md:w-[80%] m-auto'>
        <div className='bg-gray-100 mb-8 md:mb-0 md:mr-8 md:w-1/4 px-4 md:h-[70vh] rounded-2xl shadow-lg'>
          <ul className='flex flex-col'>
            {weekmod.map((item) => {
              return (
                <li onClick={() => { setWeekmodtask(item) }} key={item.id} className='mr-6 hover:bg-gray-600 bg-gray-100 hover:text-white text-gray-500 px-2 md:px-4 py-2 rounded-2xl text-xs md:text-base cursor-pointer'>{item.name}</li>
              )
            })}
          </ul>
        </div>
        <div className='bg-gray-100 md:w-3/4 px-4 md:h-[70vh] rounded-2xl shadow-lg'>
          <h1>{weekmodtask.name}</h1>
          <ul className='flex flex-col'>
            {weekmodtask.tasks && weekmodtask.tasks.map((item) => {
              return (
                <li key={item.id} className='mr-6 hover:bg-gray-600 bg-gray-100 hover:text-white text-gray-500 px-2 md:px-4 py-2 rounded-2xl text-xs md:text-base cursor-pointer'>{item.name}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main