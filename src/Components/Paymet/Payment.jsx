/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

function Payment() {
  return (
    <div className='w-full flex flex-col gap-5'>
        <div className='w-full flex justify-around'>
            <div className='w-2/5 flex flex-col gap-2'>
                <label className='text-gray-600' htmlFor="">Name</label>
                <input type="text" className='border  p-2 rounded-md' />
            </div>
            <div className='w-2/5 flex flex-col gap-2'>
                <label className='text-gray-600' htmlFor="">Contact</label>
                <input type="text" className='border p-2 rounded-md' />
            </div>
        </div>
        <div className='w-full flex justify-around'>
            <div className='w-2/5 flex flex-col gap-2'>
                <label className='text-gray-600' htmlFor="">Order NO.</label>
                <input type="text" className='border  p-2 rounded-md' />
            </div>
            <div className='w-2/5 flex flex-col gap-2'>
                <label className='text-gray-600' htmlFor="">Amount</label>
                <input type="text" className='border p-2 rounded-md' />
            </div>
        </div>
        <div className='w-full flex justify-around'>
            <div className='flex flex-col gap-2 w-2/5'>
                <label className='text-gray-600' htmlFor="">Bank</label>
                <select name="back-account" id="" className='border p-2 rounded-md'>
                    <option value="" className='text-gray-500'  >Choose Bank Accout</option>
                    <option value="">SCB</option>
                </select>
            </div>
            <div className='flex flex-col gap-2 w-2/5'>
            </div>
        </div>
        <div className='w-full flex justify-around'>
            <div className='flex flex-col w-2/5 gap-2'>
                <label className='text-gray-600' htmlFor="">Date</label>
                <input type="date" className='p-2 text-gray-500 text-sm border rounded-md' />

            </div>
            <div className='flex flex-col w-2/5 gap-2'>
                <label className='text-gray-600' htmlFor="">Time</label>
                <input type="time" value="00:00" className='p-2 text-gray-500 text-sm border rounded-md' />
            </div>
        </div>

        <div className='w-full flex justify-around'>
            <div className='flex flex-col gap-2 w-2/5'>
                <label className='text-gray-600' htmlFor="">สลิปการโอน</label>
                <input type="file" className='p-2 text-gray-500 text-sm border rounded-md' />
            </div>
            <div className='flex flex-col gap-2 w-2/5'>
            </div>
        </div>

        <div className='flex justify-center'>
            <button className='bg-blue-500 p-3 rounded-md px-12 text-white text-sm hover:bg-blue-600 font-medium'>Submit Payment</button>
            
        </div>

        <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-5'>
                <img className='w-12' src="https://giftcard.scb.co.th/assets/images/scb-logo.png" alt="" />
                <p>ธนาคารไทยพาณิชย์ สาขาxxxxx 000-0-00000-0 บจก xxxxxx</p>

            </div>
            <div className='flex items-center gap-5'>
                <img className='w-12' src="https://i.pinimg.com/originals/a0/3c/f5/a03cf5e37b4b1d0b376ad04a6b39e0b3.png" alt="" />
                <p>ธนาคารกสิกรไทย สาขาxxxxx 000-0-00000-0 บจก xxxxxx</p>
            </div>
        </div>

        

        
    </div>
  )
}

export default Payment