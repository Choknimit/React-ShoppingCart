/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RxMagnifyingGlass } from 'react-icons/rx'
import logo from '../Images/logo-depositphotos-bgremover.png'
import './index.css'

import Modal from './Modal'

function Navibar() {
    const NavMenu = [
        {name: 'หน้าแรก', link: '/'},
        {name: 'เบียร์', link: '/PageShop'},
        {name: 'ยืนยันการชำระเงิน', link: '/Payment'},
        {name: 'ติดต่อ', link: '/Contacts'},
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMouseScroll, setIsMouseScroll] = useState(false)

    const showModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

  return (
    <header className=''>
            <Modal open={isModalOpen} onCancel={handleCancel} onOk={handleOk} />
        <div className='flex items-center justify-between p-2 container mx-auto relative'>
            <div className='flex items-center text-[10px] md:text-sm lg:text-lg xl:text-lg gap-3 font-medium '>
                <img className='w-10 xl:w-20' src={logo} alt="" />
                <h4>LOGO</h4>
            </div>
            
            <div className='relative flex flex-row items-center w-[50%]'>
                <RxMagnifyingGlass className='absolute ml-3' />
                <input type="text" className='p-2 pl-10 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 outline-none rounded-md w-full text-sm border border-gray-500 duration-300' placeholder='Search' />
            </div>

            <div className='flex items-center gap-5'>
                <button onClick={showModal} className='text-[16px] font-medium '>เข้าสู่ระบบ</button>
                <Link to={`/product-cart`}>
                    <AiOutlineShoppingCart className='text-sm md:text-lg lg:text-xl xl:text-[30px] font-medium cursor-pointer' />
                </Link>
            </div>
        </div>
        <hr />

        <div className='flex mb-10 mt-5 container mx-auto '>
            <div className='text-[7px] md:text-[10px] lg:text-sm xl:text-[16px] flex gap-x-12 items-center'>
                {NavMenu.map((menu, inx) => (
                    <Link key={inx} to={menu.link}>
                        <p>{menu.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    </header>
  )
}

export default Navibar