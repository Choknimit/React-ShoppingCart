/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function BarLeft() {
  const BarLeft = [
    {name: 'BeerStyle'},
    {name: 'BeerBrand'},
    {name: 'lorem1'},
    {name: 'lorem2'},
  ]
  return (
    <div>
        <div className='border bg-[#212A3E] text-white px-16 gap-5 flex flex-col rounded-sm items-center py-3'>
          {BarLeft.map((bar, inx) => (
            <Link to={`/product-categories/${bar.name}`} key={inx}>
              <span>
                <p>{bar.name}</p>
              </span>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default BarLeft