/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ProductDetail = (props) => {
  

  return (
    <div className='mt-20 flex flex-col gap-5 w-full'>
      <div className='flex w-full justify-around'>
        <div className='w-1/3'>
          <img className='w-56 h-56 object-contain object-center' src="https://www.datocms-assets.com/75079/1656594824-4abcca61cdec0572b7b9d1bdc665fa8fdf5ab696_otter-creek-backseat-berner-ipa_4x6.jpg?w=300&fp-y=1" alt="" />
        </div>
        <div className=' w-2/3 '>
          <div className='flex flex-col gap-2 mb-5'>
            <h1 className='text-2xl'>STONE HEAD 7 DAY WITBIER 330ML X 24</h1>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos rerum animi tempore molestiae, consequuntur maiores dolorum consequatur, quam ipsum et repellat ea ipsa totam sit perferendis esse fugit aliquam.</p>
            <p>$118.45</p>
          </div>
          <button className='text-white text-sm bg-blue-500 hover:bg-blue-600 ring-1 hover:ring-blue-600 focus:outline-none focus:ring-blue-600 duration500 p-2 rounded-md'>ADD TO CART</button>
        </div>

      </div>

      <div>
        <h1>Beer Style: IPA</h1>
        <p>Size: 330ml</p>
        <p>Country: Thailand</p>
        <p>ALCOHOL: 5.7%</p>
      </div>

    </div>
  )
}

export default ProductDetail