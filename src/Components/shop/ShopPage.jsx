/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ShopPage() {
    const [prdlist, setPrdlist] = useState([])
    useEffect(() => {
        let abortController = new AbortController()
        const respone = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/products', {
                    signal: abortController.signal
                })
                console.log(res.data.products)
                setPrdlist(res.data.products)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        respone()
        
    }, [])
  return (
    <div>
        <div className='flex gap-5 items-center'>
            <h1 className='text-2xl font-semibold uppercase tracking-widest'>FILTER</h1>
            <div className='p-2'>
                <select name="" id="" className='uppercase focus:outline-none ring-gray-300 dutation-500 w-full'>
                    <option value="" >Beer Style (ประเภทของเบียร์)</option>
                    <option value="">Ale</option>
                    <option value="">Lager</option>
                    <option value="">India pale ale</option>
                    <option value="">IPA</option>
                </select>
            </div>
            <div className='p-2 uppercase'>
                <select name="" id="" className='uppercase focus:outline-none ring-gray-300 dutation-500'>
                    <option value="" >Price (ราคา)</option>
                    <option value="">100.00 - 500.00</option>
                </select>
            </div>
        </div>
        <hr />
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5 xl:grid-cols-6 gap-2  mt-5 overflow-hidden p-1'>
            {prdlist.map((prd) => (
                <span key={prd.id} className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03]'>
                    <Link to={`/product-detail/${prd.title}`}>
                        <img className='w-56 h-40 object-contain object-center ' src={prd.images[0]} alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>{prd.title}</p>
                            </div>
                            <div>
                                <p className='text-[#F86F03] text-[14px] flex items-center'>$ {prd.price.toFixed(2)}</p>
                            </div>

                        </div>

                    </Link>
                    
                </span>
            ))}
        </div>
    </div>
  )
}

export default ShopPage