import React, { useState } from 'react'
import { MdOutlinePostAdd } from 'react-icons/md';

import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BriefcaseIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

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
    // add week to the data order of the weeks?
    // console.log(order,weeks);
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
    <>{props.week ? <div className='w-[70%] md:w-1/5 h-2/5 bg-white mx-auto rounded-lg border border-gray-400 absolute top-20 right-36'>
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
          <select name="order" onChange={handleChange} className='bg-gray-100 p-2 font-medium rounded-xl border focus:outline-none cursor-pointer' defaultValue={"Order"}>
            <option value="Order" disabled>Order</option>
            <option value="Before">Before</option>
            <option value="After">After</option>
          </select>
        </div>
        <div>
          <select name="weeks" onChange={handleChange} className='bg-gray-100 p-2 font-medium rounded-xl border focus:outline-none cursor-pointer ' defaultValue={"Weeks"}>
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
          <span className='font-medium'>New Week will be added</span> <span className='text-gray-400'>"order" "week"</span>
        </div>
      </div>
      <div className='flex justify-between my-8 mx-6'>
        <button className='bg-blue-100 text-gray-500 font-normal rounded-xl px-6 py-1' onClick={() => props.setWeek(!props.week)}>Cancel</button>
        <button className='bg-gray-500 text-white rounded-xl px-6 py-1 hover:bg-gray-600' onClick={() => setOpen(true)}>Create</button>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <BriefcaseIcon className="h-6 w-6 text-red-600" aria-hidden="true" />

                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Assign Week Task {order} Week {weeks}
                        </Dialog.Title>
                        <div className="mt-2">
                          <input className='w-full mb-2' type="text" name='weekno' onChange={handleChange} value={weekno} placeholder='Enter Week No.' />
                          <div>
                            <input className='w-full mb-2' type="text" name='week_mod' onChange={handleChange} value={week_mod} placeholder='Enter week module' />
                            {/* <PlusIcon className='h-6 w-6 text-gray-500' onClick={() => { setModno(modno + 1) }} /> */}
                            <input className='w-full mb-2' type="text" name='week_task' onChange={handleChange} value={week_task} placeholder='Enter week task' />
                            {/* <PlusIcon className='h-6 w-6 text-gray-500' /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => { handleAdd(); setOpen(false); props.setWeek(!props.week) }}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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