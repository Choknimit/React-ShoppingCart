/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
//? แสดงรายการสินค้า
function CartItem({ id, name, price, image_url}) {
  return (
    <div className='w-full'>
      <div className='bg-[#FFF] flex items-center w-full p-5 gap-5 box-sh rounded-sm justify-between '>
        <div className='flex items-center gap-10 w-[20rem]'>
          <img className='w-24 h-24 object-contain' src={image_url} alt="" />
          <p className='text-el'>{name}</p>
        </div>

        <div className='flex items-center gap-[6rem]'>
          <p>฿{price}</p>
          <div className='flex items-center gap-2 border'>
            <button className='border-r-[1px] px-2'>-</button>
            <p>0</p>
            <button className='border-l-[1px] px-2'>+</button>
          </div>

          <div>
            <p>$2450</p>
          </div>

          <div className='text-sm'>
            <button>ลบ</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItem