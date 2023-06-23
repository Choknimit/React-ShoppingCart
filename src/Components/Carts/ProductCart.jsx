/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BsFilePlus, BsFileMinus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from 'react-icons/ti'

import CartItem from './CartItem'
import CartData from './CartData'

function ProductCart({ Cart }) {
  const [number, setNumber] = useState(0)
  const numberPlus = () => {
    setNumber((number) => (number + 1), number)
  }
  const numberMinus = () => {
    if(number > 0) {
      setNumber((number) => (number - 1), number)

    }
  }

  return (
    <div className='flex flex-col gap-5 w-full'>
      <div className=' flex flex-col gap-5'>
        <div className=' py-4 rounded-sm flex items-center gap-5'>
          <h4 className='text-2xl font-semibold tracking-wide'>ตระกร้าสินค้า</h4>
          <TiShoppingCart className='text-2xl' />

        </div>
        <hr />
        <div className='flex justify-between'>
          <div >
            <p>สินค้า</p>
          </div>
          <div className='flex items-center gap-[5rem]'>
            <p>ราคาต่อชื้น</p>
            <div>
              <p>จำนวนสินค้า</p>
            </div>

            <div>
              <p>ราคารวม</p>
            </div>

            <div>
              <p>แอคชั่น</p>
            </div>
          </div>
        </div>
          {CartData.map((data) => {
              {return <CartItem key={data.id} {...data}/>}
            })}
          <div className='sticky z-[999] bottom-0 total-footer'>
            <div className='flex justify-end items-end gap-5 bg-[#FFFF] h-36 p-4 pb-5 box-sh relative' >
              <div className='flex items-center gap-5'>
                <p className='text-lg font-semibold'>สินค้ารวม(1)</p>
                <div className='flex items-center gap-2'>
                  <p className='text-lg font-semibold'>ยอดรวม</p>
                  <p className='text-[24px] font-[500] text-orange-700 '>฿2450</p>
                </div>

              <div>
                <button className='bg-blue-600 p-3 px-12 hover:bg-blue-500 transition-all durantion-500 text-sm font-normal text-white rounded-md'>สั่งซื้อสินค้า</button>
              </div>
              </div>
            </div>
          </div>

      </div>

      {/* <div className='flex justify-between items-end'>
        <div className='flex  gap-5'>
          <img className='w-24 h-24 object-contain' src="https://uploads-ssl.webflow.com/5e18f76c778ad80e975f2197/640295d85361e548ed311600_nloobsixklis1p5h2w3x-p-500.jpeg" alt="" />
          <p>DDH Double Citra Daydream from Other Half</p>
        </div>

        <span className='flex'>
          <div className='flex gap-9 items-center'>
            <p>$114.00</p>
            <div className='flex items-center gap-2 border'>
                <button onClick={numberMinus} className=' bg-transparent rounded-sm text-lg font-semibold px-3 border-r-[1px] '>-</button>
                <p className='w-3'>{number}</p>
                <button onClick={numberPlus} className=' bg-transparent rounded-sm text-lg font-semibold px-3 border-l-[1px] '>+</button>
            </div>
            <div className='flex gap-9'>
              <p>$240</p>
              <p>ลบ</p>
            </div>
          </div>
        </span>
      </div>
      <hr />

      <div className='flex justify-between items-end'>
        <div className='flex  gap-5'>
          <img className='w-24 h-24 object-contain' src="https://uploads-ssl.webflow.com/5e18f76c778ad80e975f2197/640297da2a9eea5f5c8e3d70_c5bazifavivllvn7t7ce-p-500.jpeg" alt="" />
          <p>A Deal with the Devil (2022) from Anchorage </p>
        </div>

        <span className='flex'>
          <div className='flex gap-9 items-center'>
          <p>114.00</p>
          <div className='flex items-center gap-5'>
            <button onClick={numberMinus} className='p-1.5 bg-gray-300 rounded-sm text-lg font-semibold border px-4'>-</button>
            <p className='w-2'>{number}</p>
            <button onClick={numberPlus} className='p-1.5 bg-gray-300 rounded-sm text-lg font-semibold border px-4'>+</button>
          </div>
          </div>
        </span>
      </div>
      <hr />

      <div className='flex justify-between items-end'>
        <div className='flex  gap-5'>
          <img className='w-24 h-24 object-contain' src="https://uploads-ssl.webflow.com/5e18f76c778ad80e975f2197/63fd937906354f3e3d475882_larrzepynokzircx6p0d-p-500.jpeg" alt="" />
          <p>Hydra | Pink Guava + Mango + Pineapple from Mortalis</p>
        </div>

        <span className='flex'>
          <div className='flex gap-9 items-center'>
          <p>114.00</p>
          <div className='flex items-center gap-5'>
            <button onClick={numberMinus} className='p-1.5 bg-gray-300 rounded-sm text-lg font-semibold border px-4'>-</button>
            <p className='w-2'>{number}</p>
            <button onClick={numberPlus} className='p-1.5 bg-gray-300 rounded-sm text-lg font-semibold border px-4'>+</button>
          </div>
          </div>
        </span>
      </div>
      <hr />

      <div className='flex justify-between items-end'>
        <div className='flex  gap-5'>
          <img className='w-24 h-24 object-contain' src="https://uploads-ssl.webflow.com/5e18f76c778ad80e975f2197/64029ba64b5726b2ac6bca81_fb5grwh7wzdb6dawxxo1-p-500.jpeg" alt="" />
          <p>Best Maid Sour Pickle Beer</p>
        </div>

        <span className='flex'>
          <div className='flex gap-9 items-center'>
          <p>114.00</p>
          <div className='flex items-center gap-5'>
            <button onClick={numberMinus} className='p-1.5 bg-gray-300 rounded-sm text-lg font-semibold border px-4'>-</button>
            <p className='w-2'>{number}</p>
            <button onClick={numberPlus} className='p-1.5 bg-gray-300 rounded-sm text-lg font-semibold border px-4'>+</button>
          </div>
          </div>
        </span>
      </div>
      <hr />

      <div className='flex justify-between items-end'>
        <div className='flex  gap-5'>
          <img className='w-24 h-24 object-contain' src="https://www.datocms-assets.com/75079/1656592856-0dbedc8ed35236dc0519e7ff89ee37ffc87b8bfd_greens-ipa.jpg?w=300&fp-y=1" alt="" />
          <p>Green`s IPA</p>
        </div>

        <span className='flex'>
          <div className='flex gap-9 items-center'>
          <p>114.00</p>
          <div className='flex items-center gap-5'>
            <button onClick={numberMinus} className='p-1.5 bg-gray-300 rounded-sm text-lg font-semibold border px-4'>-</button>
            <p className='w-2'>{number}</p>
            <button onClick={numberPlus} className='p-1.5 bg-gray-300 rounded-sm text-lg font-semibold border px-4'>+</button>
          </div>
          </div>
        </span>
      </div>
      <hr />

      <div className='flex justify-between items-end'>
        <div className='flex  gap-5'>
          <img className='w-24 h-24 object-contain' src="https://www.datocms-assets.com/75079/1656594953-8659ef217b7c67c506d3e0dcce2f7ec0259ea897_avery-ipa_4x6.jpg?w=300&fp-y=1" alt="" />
          <p>Avery Brewing Company IPA</p>
        </div>

        <span className='flex'>
          <div className='flex gap-9 items-center'>
          <p>114.00</p>
          <div className='flex items-center gap-5'>
            <button onClick={numberMinus} className='p-1.5 bg-gray-300 rounded-sm text-lg font-semibold border px-4'>-</button>
            <p className='w-2'>{number}</p>
            <button onClick={numberPlus} className='p-1.5 bg-gray-300 rounded-sm text-lg font-semibold border px-4'>+</button>
          </div>
          </div>
        </span>
      </div>
      <hr />

      <div className='flex items-center justify-between'>
        <p className='text-2xl font-bold'>Total: 3526.00</p>
        <Link to={`/payment`}>
          <button className='p-2 bg-orange-400 rounded-md text-white font-medium text-sm hover:bg-orange-500 duration-500'>ConFirme order</button>

        </Link>

      </div> */}

    </div>
  )
}

export default ProductCart