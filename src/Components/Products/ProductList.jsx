/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BsCurrencyDollar, BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

//Component
import Image from './ProductImage'

function ProductList() {
    const [prdlist, setPrdlist] = useState([])
    
    useEffect(() => {
        let abortController = new AbortController()
        const responeProduct = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/products', {
                    signal: abortController.signal
                })
                // console.log(res.data.products)
                setPrdlist(res.data.products)

            } catch (error) {
                console.log(error)
                
            }
        }
        responeProduct()
    }, [])


    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1571767454098-246b94fbcf70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1113&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1584225064536-d0fbc0a10f18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1587582816472-81e94768469a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1626320290598-03656e931a31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1106&q=80'
        },
    ]

    const [curSlider, setCurSlider] = useState(0)
    const timeRef = useRef(null)

    // const Goprev = () => {
    //     setCurSlider((current) => (current === 0 ? slides.length -1 : curSlider - 1))
    // }

    // const Gonext = () => {
    //     setCurSlider((current) => (current === slides.length - 1 ? 0 : curSlider + 1))
    // }

    // useEffect(() => {
    //     timeRef.current = setTimeout(() => {
    //         Gonext()
    //     }, 5000)
    // },)

    const Goprev = () => {
        const isFirstSlide = curSlider === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : curSlider - 1
        setCurSlider(newIndex)
    }

    const Gonext = () => {
        const isLastSlide = curSlider === slides.length - 1;
        const newIndex = isLastSlide ? 0 : curSlider + 1;
        setCurSlider(newIndex)
    }

    useEffect(() => {
        timeRef.current = setTimeout(() => {
            Gonext()
        }, 5000)
    })
    
  return ( 
    <div className='w-full'>
        <div className='flex gap-1 w-full h-[305px] '>
            <div style={{backgroundImage: `url(${slides[curSlider].url})`}} className='w-3/5 h-full z-0 relative duration-500  bg-cover bg-center'>
                <div className=' absolute text-white left-0 -translate-x-0 translate-y-[-50] top-[50%] rounded-full cursor-pointer bg-black/20'>
                    <BsChevronCompactLeft onClick={Goprev}  size={30}/>
                </div>
                <div className=' absolute text-white right-0 -translate-x-0 translate-y-[-50] top-[50%] rounded-full cursor-pointer bg-black/20'>
                    <BsChevronCompactRight onClick={Gonext}  size={30}/>
                </div>
            </div>
                

            <div className='w-2/5'>
                <div className='flex flex-col gap-1'>
                    <img className='h-[150px] object-cover object-center' src="https://images.unsplash.com/photo-1615332579037-3c44b3660b53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <img className='h-[150px] object-cover object-center ' src="https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" alt="" />
                </div>
            </div>
        </div>

        <div className='mt-5'>
            <h1 className='text-2xl font-semibold'>BEST SELLER</h1>
            {/* <span className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5 xl:grid-cols-6 gap-2  mt-5 overflow-hidden p-1'>
                {prdlist.map((prd) => (
                    <span key={prd.id} className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                        <Link to={`/product-detail/${prd.title}`}>
                            <Image {...prd} />
                            <div className='p-2 bg-[#FFFFFF]'>
                                <div className='h-10 text-[13px]'>
                                    <p className='text-ellipsis overflow-hidden truncate ...'>{prd.title}</p>
                                </div>
                                <div className='text-[#F86F03] text-[14px] flex items-center'>
                                    <BsCurrencyDollar />
                                    <p>{prd.price.toFixed(2)}</p>
                                </div>
                            </div>
                        </Link>
                    </span>
                ))}
            </span> */}
            <span className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5 xl:grid-cols-6 gap-2  mt-5 overflow-hidden p-1'>
                <span className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                    <Link to={`/product-detail`}>
                        <img className='w-56 h-44 object-contain' src="https://www.datocms-assets.com/75079/1656592856-0dbedc8ed35236dc0519e7ff89ee37ffc87b8bfd_greens-ipa.jpg?w=300&fp-y=1" alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>Green`s IPA</p>
                            </div>
                            <div className='text-[#F86F03] text-[14px] flex items-center'>
                                <p>$152.00</p>
                            </div>
                        </div>
                    </Link>
                </span>
                <span className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                    <Link to={`/product-detail`}>
                        <img className='w-56 h-44 object-contain' src="https://www.datocms-assets.com/75079/1656594953-8659ef217b7c67c506d3e0dcce2f7ec0259ea897_avery-ipa_4x6.jpg?w=300&fp-y=1" alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>Avery Brewing Company IPA</p>
                            </div>
                            <div className='text-[#F86F03] text-[14px] flex items-center'>
                                <p>$152.00</p>
                            </div>
                        </div>
                    </Link>
                </span>
                <span className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                    <Link to={`/product-detail`}>
                        <img className='w-56 h-44 object-contain' src="https://www.datocms-assets.com/75079/1656595644-0ae34821f2f6452cbdd4e9f5bd7e381016680c4d_flying-dog-snake-dog-ipa_4x6.jpg?w=300&fp-y=1" alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>Flying Dog Brewery Snake Dog IPA</p>
                            </div>
                            <div className='text-[#F86F03] text-[14px] flex items-center'>
                                <p>$152.00</p>
                            </div>
                        </div>
                    </Link>
                </span>
                <span className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                    <Link to={`/product-detail`}>
                        <img className='w-56 h-44 object-contain' src="https://www.datocms-assets.com/75079/1657658826-roadmap-mama-duke-s-8369.jpg?w=300&fp-y=1" alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>Roadmap Brewing Co Mama Dukes</p>
                            </div>
                            <div className='text-[#F86F03] text-[14px] flex items-center'>
                                <p>$152.00</p>
                            </div>
                        </div>
                    </Link>
                </span>
                <span className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                    <Link to={`/product-detail`}>
                        <img className='w-56 h-44 object-contain' src="https://www.datocms-assets.com/75079/1656594798-7410dd86213c285a3a37c09a728498ad7495d5f6_alaskan-icy-bay-ipa_4x6.jpg?w=300&fp-y=1" alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>Alaskan Brewing Co. Icy Bay IPA</p>
                            </div>
                            <div className='text-[#F86F03] text-[14px] flex items-center'>
                                <p>$152.00</p>
                            </div>
                        </div>
                    </Link>
                </span>
                <span className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                    <Link to={`/product-detail`}>
                        <img className='w-56 h-44 object-contain' src="https://www.datocms-assets.com/75079/1656563865-lagunitas-night-pils-18-12-03_cbb_issue31-272_6x10.jpg?w=300&fp-y=1" alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>Lagunitas Brewing Night Pils</p>
                            </div>
                            <div className='text-[#F86F03] text-[14px] flex items-center'>
                                <p>$152.00</p>
                            </div>
                        </div>
                    </Link>
                </span>
                <span className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                    <Link to={`/product-detail`}>
                        <img className='w-56 h-44 object-contain' src="https://www.datocms-assets.com/75079/1656595026-30ec99bd2682dbff851a304b6cd41c017821823f_harpoon-ipa_4x6.jpg?w=300&fp-y=1" alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>Harpoon Brewery Harpoon IPA</p>
                            </div>
                            <div className='text-[#F86F03] text-[14px] flex items-center'>
                                <p>$152.00</p>
                            </div>
                        </div>
                    </Link>
                </span>
                <span className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                    <Link to={`/product-detail`}>
                        <img className='w-56 h-44 object-contain' src="https://www.datocms-assets.com/75079/1656595450-5757d00d68484a8bdc75b567779697871eb61f61_boulevard-pop-up-session-ipa_4x6.jpg?w=300&fp-y=1" alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>Boulevard Brewing Co. Pop-Up Session IPA</p>
                            </div>
                            <div className='text-[#F86F03] text-[14px] flex items-center'>
                                <p>$152.00</p>
                            </div>
                        </div>
                    </Link>
                </span>
                <span className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                    <Link to={`/product-detail`}>
                        <img className='w-56 h-44 object-contain' src="https://www.datocms-assets.com/75079/1672869958-two-roads-na-american-ipa-8974.jpg?w=300&fp-y=1" alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>Two Roads Brewing Co Non-Alcoholic American IPA</p>
                            </div>
                            <div className='text-[#F86F03] text-[14px] flex items-center'>
                                <p>$152.00</p>
                            </div>
                        </div>
                    </Link>
                </span>
                <span className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                    <Link to={`/product-detail`}>
                        <img className='w-56 h-44 object-contain' src="https://www.datocms-assets.com/75079/1656595444-6ce01d6904b9a82fd473878ae52f438e7e780379_heavy-seas-crossbones-session-ipa_4x6.jpg?w=300&fp-y=1" alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>Heavy Seas Beer Cross Bones</p>
                            </div>
                            <div className='text-[#F86F03] text-[14px] flex items-center'>
                                <p>$152.00</p>
                            </div>
                        </div>
                    </Link>
                </span>
                <span className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                    <Link to={`/product-detail`}>
                        <img className='w-56 h-44 object-contain' src="https://www.datocms-assets.com/75079/1656595413-ad3303032d40cbfe382a10b8c9406ae339262f60_sam-adams-rebel-rouser-dipa_4x6.jpg?w=300&fp-y=1" alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>Samuel Adams / Boston Beer Company Rebel Rouser</p>
                            </div>
                            <div className='text-[#F86F03] text-[14px] flex items-center'>
                                <p>$152.00</p>
                            </div>
                        </div>
                    </Link>
                </span>
                <span className='bg-[#FFFFFF] box-shadow-prd hover:ring-2 outline-none ring-[#F86F03] '>
                    <Link to={`/product-detail`}>
                        <img className='w-56 h-44 object-contain' src="https://www.datocms-assets.com/75079/1656594824-4abcca61cdec0572b7b9d1bdc665fa8fdf5ab696_otter-creek-backseat-berner-ipa_4x6.jpg?w=300&fp-y=1" alt="" />
                        <div className='p-2 bg-[#FFFFFF]'>
                            <div className='h-10 text-[13px]'>
                                <p className='text-ellipsis overflow-hidden truncate ...'>Otter Creek Brewing Backseat Berner</p>
                            </div>
                            <div className='text-[#F86F03] text-[14px] flex items-center'>
                                <p>$152.00</p>
                            </div>
                        </div>
                    </Link>
                </span>
            </span>

        </div>
        
    </div>
  )
}

export default ProductList