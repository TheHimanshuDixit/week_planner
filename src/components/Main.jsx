import React, { useState } from 'react'
import { MdOutlinePostAdd } from 'react-icons/md';

const Main = (props) => {

  const [weekmod, setWeekmod] = useState(props.Data[0].modules)
  const [weekmodtask, setWeekmodtask] = useState(props.Data[0].modules[0])
  const [bgweek, setBgweek] = useState(props.Data[0].week_number)

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col md:flex-row justify-between my-4 px-8 py-4 w-[90%] md:w-[80%] m-auto bg-transparent border-2 border-white rounded-xl shadow-2xl'>
        <div>
          <ul className='flex justify-center'>
            {props.Data.map((item) => {
              return (
                <li onClick={() => {
                  setWeekmod(item.modules);
                  setWeekmodtask(item.modules[0]);
                  setBgweek(item.week_number);
                }} key={item.id} className={`mr-6 hover:bg-fuchsia-200 hover:text-black px-2 md:px-4 py-2 rounded-2xl text-xs md:text-base cursor-pointer ${bgweek === item.week_number ? 'bg-fuchsia-600 text-white' : 'bg-fuchsia-300 text-gray-700'}`}>Week {item.week_number}</li>
              )
            })}
          </ul>
        </div>
        <div className='flex items-center text-white text-base md:text-lg justify-center cursor-pointer mt-4 md:mt-0' onClick={() => { props.setWeek(!props.week) }}>
          <div className='mr-1'>
            <MdOutlinePostAdd />
          </div>
          <div>
            <h1>Add a new week</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row my-4 py-4 w-[90%] md:w-[80%] m-auto'>
        <div className='bg-transparent mb-8 md:mb-0 md:mr-8 md:w-1/4 px-4 md:h-[70vh] rounded-2xl shadow-2xl border-b-2 md:border-r-2 md:border-b-0'>
          <ul className='flex flex-col mb-6 md:mb-auto'>
            <div className='text-white text-center text-3xl font-semibold animate-pulse ease-linear duration-200 italic underline mt-4 mb-6 md:mb-8 '>Week {bgweek}</div>
            {weekmod.map((item, index) => {
              return (
                <li onClick={() => { setWeekmodtask(item) }} key={item.id} className='hover:font-semibold text-white text-center md:text-start px-2 md:px-4 py-2 text-base md:text-lg cursor-pointer'>{index + 1}. {item.name}</li>
              )
            })}
          </ul>
        </div>
        <div className='bg-transparent md:w-3/4 px-4 md:h-[70vh] rounded-2xl shadow-2xl border-t-2 md:border-t-0 md:border-l-2'>
          <h1 className='text-white font-bold text-2xl md:text-4xl px-2 py-2'><span className='underline'>Module Name</span> : {weekmodtask.name}</h1>
          <ul className='flex flex-col my-6'>
          {weekmodtask.tasks && <h1 className='text-white font-bold text-xl md:text-3xl px-2 py-2'>Module Tasks :- </h1>}
            {weekmodtask.tasks && weekmodtask.tasks.map((item, index) => {
              return (
                <li key={item.id} className='font-bold text-white px-10 py-4 text-base md:text-xl'>{index + 1}.. {item.name}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main