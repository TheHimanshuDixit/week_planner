import React, { useState } from 'react'
import { MdOutlinePostAdd } from 'react-icons/md';

import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

const Addweek = (props) => {

  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  const [order, setOrder] = useState('');
  const [weeks, setWeeks] = useState('');

  const [weekno, setWeekno] = useState('');
  const [week_mod, setWeek_mod] = useState('');
  const [week_task, setWeek_task] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'order') {
      setOrder(value);
    }
    if (name === 'weeks') {
      setWeeks(value);
    }
    if (name === 'weekno') {
      setWeekno(value);
    }
    if (name === 'week_mod') {
      setWeek_mod(value);
    }
    if (name === 'week_task') {
      setWeek_task(value);
    }
  }

  function handleAdd() {
    const w = {
      "id": parseInt(weekno),
      "week_number": parseInt(weekno),
      "modules": [
        {
          "id": "mod1",
          "name": week_mod,
          "tasks": [
            {
              "id": "task1",
              "name": week_task
            }
          ]
        }
      ]
    }
    setWeekno('');
    setWeek_mod('');
    setWeek_task('');

    // add week to the data order of the weeks
    if (order === 'Before') {
      const newdata = [];
      let flag = false;
      for (let i = 0; i < props.Data.length; i++) {
        if (props.Data[i].week_number == weeks) {
          flag = true;
          w.week_number = parseInt(weeks);
          newdata.push(w);
        }
        if (flag) {
          props.Data[i].week_number = props.Data[i].week_number + 1;
        }
        newdata.push(props.Data[i]);
      }
      props.setData(newdata);
    }
    if (order === 'After') {
      const newdata = [];
      let flag = false;
      for (let i = 0; i < props.Data.length; i++) {
        if (flag) {
          props.Data[i].week_number = props.Data[i].week_number + 1;
        }
        newdata.push(props.Data[i]);
        if (props.Data[i].week_number == weeks) {
          flag = true;
          w.week_number = parseInt(weeks) + 1;
          newdata.push(w);
        }
      }
      props.setData(newdata);
    }
  }
  return (
    <>{props.week ? <div className='w-[50%] h-1/4 md:w-1/5 md:h-2/5 bg-fuchsia-200 mx-auto rounded-lg border border-gray-500 absolute top-[125px] right-[150px] md:top-[90px] md:right-[151px]'>
      <div className='flex items-center border-b-2 border-gray-300 justify-between text-fuchsia-500 text-2xl font-semibold px-4 py-4 rounded-xl shadow-md'>
        <div>
          <h1>Add New Week</h1>
        </div>
        <div>
          <MdOutlinePostAdd />
        </div>
      </div>
      <div className='flex justify-between items-center p-4'>
        <div>
          <select name="order" onChange={handleChange} className='bg-fuchsia-300 p-2 font-medium rounded-xl border border-black focus:outline-none cursor-pointer' defaultValue={"Order"}>
            <option value="Order" disabled>Order</option>
            <option value="Before">Before</option>
            <option value="After">After</option>
          </select>
        </div>
        <div>
          <select name="weeks" onChange={handleChange} className='bg-fuchsia-300 p-2 font-medium rounded-xl border border-black focus:outline-none cursor-pointer ' defaultValue={"Weeks"}>
            <option value="Weeks" disabled>Week</option>
            {props.Data.map((item) => {
              return (
                <option key={item.id} value={item.week_number}>Week {item.week_number}</option>
              )
            })}
          </select>
        </div>
      </div>
      <div>
        <div className='text-sm text-center italic mt-3'>
          <span className='font-medium'>New Week will be added</span> <span className='text-fuchsia-500'>"order" "week"</span>
        </div>
      </div>
      <div className='flex justify-between my-8 mx-6'>
        <button className='bg-fuchsia-200 border border-black text-black font-normal rounded-xl px-6 py-1 hover:bg-fuchsia-300' onClick={() => props.setWeek(!props.week)}>Cancel</button>
        <button className='bg-fuchsia-500 border border-black text-white rounded-xl px-6 py-1 hover:bg-fuchsia-600' onClick={() => setOpen(true)}>Create</button>
      </div>
    </div> : <div></div>
    }
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg sm:my-auto">
                  <div className="bg-blue-50 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                        <BriefcaseIcon className="h-6 w-6 text-fuchsia-700" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                          Assign Week Task {order} Week {weeks}
                        </Dialog.Title>
                        <div className="mt-4">
                          <input className='w-full mb-2 border-2 border-black px-2 py-1 bg-gray-200 placeholder:text-black rounded-lg' type="text" name='weekno' onChange={handleChange} value={weekno} placeholder='Enter Week No.' />
                          <input className='w-full mb-2 border-2 border-black px-2 py-1 bg-gray-200 placeholder:text-black rounded-lg' type="text" name='week_mod' onChange={handleChange} value={week_mod} placeholder='Enter week module' />
                          <input className='w-full mb-2 border-2 border-black px-2 py-1 bg-gray-200 placeholder:text-black rounded-lg' type="text" name='week_task' onChange={handleChange} value={week_task} placeholder='Enter week task' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-fuchsia-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 sm:ml-3 sm:w-auto border-black border"
                      onClick={() => { handleAdd(); setOpen(false); props.setWeek(!props.week) }}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-fuchsia-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-fuchsia-200 sm:mt-0 sm:w-auto border-black border"
                      onClick={() => { setOpen(false); props.setWeek(!props.week) }}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Addweek;