/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import RootlayoutBar from './Components/Navbar/RootlayoutBar'
import ProductList from './Components/Products/ProductList'
import ProductDetail from './Components/Products/ProductDetail'
import ProductCreate from './Components/Admin/ProductCreate'
import ShopPage from './Components/shop/ShopPage'
import Payment from './Components/Paymet/Payment'
import ProductCart from './Components/Products/ProductCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <RootlayoutBar>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/PageShop' element={<ShopPage />} />
          <Route path='/product-detail' element={<ProductDetail />} />
          <Route path='/product-create' element={<ProductCreate />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/product-cart' element={<ProductCart />} />
        </Routes>
      </RootlayoutBar>
    </Router>
  )
}

export default App
