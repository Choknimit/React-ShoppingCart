/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import './index.css'

function Modal({ open, onCancel, onOk }) {
  if(!open) return null;
  return (
    <div className={`block overlay z-[9999] ${open ? 'open' : ''}` }>
      <div className='animaModal'>
        <div className='modal-container'>
          <div className='p-5 bg-[#F7FFE5]'>
            <div className='modal-content-inner'>
              <div className='flex justify-end'>
                <button onClick={onCancel} >X</button>
              </div>

              <span className='flex flex-col'>
                <div className=' flex flex-col items-center justify-center gap-2'>
                  <div>
                    <h4>เข้าสู่ระบบ</h4>
                  </div>
                  <div className='text-[12px] flex gap-2'>
                    <p className='uppercase'>new to beer caft now?</p>
                    <Link className='underline'>สมัครสมาชิก</Link>
                  </div>
                </div>
              </span>

            

              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2 text-sm'>
                  <label htmlFor="">อีเมล</label>
                  <input name='' className='p-2 px-3 border rounded-md bg-[#F8F9FC] outline-none' type="text" placeholder='Email' />
                </div>

                <div className='flex flex-col gap-2 text-sm'>
                  <label htmlFor="">รหัสผ่าน</label>
                  <input name='' className='p-2 px-3 border rounded-md bg-[#F8F9FC] outline-none' type="text" placeholder='Email' />
                </div>

                <div className='w-full flex flex-col justify-center items-center gap-3'>
                  <button className='bg-[#001C30] p-2 text-white text-sm font-medium  w-full' onClick={onOk}>เข้าสู่ระบบ</button>
                  <Link className='text-[11px] underline'>ลืมรหัสผ่าน</Link>
                </div>

                <div className='flex flex-col justify-center items-center gap- mt-5'>
                  <p className='text-gray-400 text-[14px]'>หรือดำเนินการต่อด้วย</p>
                  <div className='flex gap-9 mt-12 text-xl'>
                    <Link>
                      <FcGoogle />
                    </Link>
                    <Link className='text-blue-500'>
                      <FaFacebook />
                    </Link>

                  </div>
                </div>

              </div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal