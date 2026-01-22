import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Layout/Layout'
import DashboardLayout from './Layout/DashboardLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import BannerTable from './adminPages/banner/BannerTable'
import BannerForm from './adminPages/banner/BannerForm'

function App() {
  return (


    <Routes>

      {/* public layout */}
      <Route element={<Layout />}>
        <Route index element={<div>this</div>} />
      </Route>


      {/* //admin layout */}
      <Route path="admin" element={<DashboardLayout />}>
        <Route index element={<div>this s==is admin dashboard page</div>} />
        <Route path="banner" element={<BannerTable/>}/>
        <Route path='banner/create' element={<BannerForm/>}/>
      </Route>




      <Route path='/login' element={<Login />} />
      
      <Route path='/signup' element={<Signup />} />
    </Routes>


  )
}

export default App