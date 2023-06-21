/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function ProductImage(props) {
  // console.log(props.images[1])
  return (
    <div className='relative'>
        {/* <img className='w-36 h-28 sm:w-24 sm:h-20 xl:w-48 xl:h-40 object-cover object-top transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ' src={props.images[0]} alt="" /> */}
        <img className='w-40 h-36 md:w-48 xl:w-48 xl:h-40 object-contain' src={props.images[0]} alt="" />
    </div>
  )
}

export default ProductImage