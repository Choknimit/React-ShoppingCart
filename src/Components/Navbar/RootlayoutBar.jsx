/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Children } from 'react'
import Navibar from './Navibar'
import BarLeft from './BarLeft'
import Footer from './Footer'

function RootlayoutBar({ children }) {
  return (
    <div className=''>
      <div className='flex flex-col bg-[#FFFFFF]'>
          <div className=''>
              <div className=''>
                  <Navibar />
              </div>
          </div>
          <main className='flex container mx-auto '>
              { children }
          </main>

          <Footer>
            <Footer />
          </Footer>


      </div>

    </div>
  )
}

export default RootlayoutBar