import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardHome from './DashboardHome'
import Orders from './Orders'
import Products from './Products'

export default function index() {
    return (
        <>
            <Routes>
                <Route path='home' element={<DashboardHome />} />
                <Route path='orders' element={<Orders />} />
                <Route path='products' element={<Products />} />
                <Route path='*' element={<>404 Page Not Found</>} />
            </Routes>
        </>
    )
}
