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
import ProductCart from './Components/Carts/ProductCart'
import Login from './Components/Regis/Login'
import Dashboard from './Components/Admin/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  const isAdmin = true; // เปลี่ยนเป็นตัวแปรที่เก็บสถานะของผู้ใช้ หรือตัวแปรที่เกี่ยวข้องกับสิทธิ์ของผู้ใช้

  return (
    // <Router>
    //   <RootlayoutBar>
    //     <Routes>
    //         <Route path='/' element={<ProductList />} />
    //         <Route path='/PageShop' element={<ShopPage />} />
    //         <Route path='/product-detail' element={<ProductDetail />} />
    //         <Route path='/product-create' element={<ProductCreate />} />
    //         <Route path='/payment' element={<Payment />} />
    //         <Route path='/product-cart' element={<ProductCart />} />
    //         <Route path='/login' element={<Login />} />
    //     </Routes>
    //   </RootlayoutBar>
    // </Router>
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <RootlayoutBar>
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/PageShop" element={<ShopPage />} />
                <Route path="/product-detail" element={<ProductDetail />} />
                <Route path="/product-create" element={<ProductCreate />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/product-cart" element={<ProductCart />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </RootlayoutBar>
          }
        />
        {isAdmin && (
          <Route path="/admin-dashboard" element={<Dashboard />} />
        )}
      </Routes>
    </Router>

  )
}

export default App
