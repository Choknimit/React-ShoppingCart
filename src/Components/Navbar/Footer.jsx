/* eslint-disable no-unused-vars */
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='h-64 bg-[#212A3E] mt-24 text-white'>
        <div className='container '>
          <div className='mt-5 flex w-full'>
            <div className='flex flex-col gap-3 w-2/5'>
              <p className='text-2xl'>REACH OUT US AT:</p>
              <div className='text-sm font-normal flex flex-col gap-2 '>
                <p>CALL TH: 09-999-9999</p>
                <p className='text-lg'>CONTACT</p>
                <Link to='https://github.com/Choknimit' className='text-xl'><BsGithub /></Link>
              </div>
            </div>

            <div className='w-2/5'>
              <h1>Demo Shopping Cart </h1>
            </div>

          </div>
          

          </div>
    </div>
  )
}

export default Footer