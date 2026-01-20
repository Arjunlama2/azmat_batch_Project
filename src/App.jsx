import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Layout/Layout'
import DashboardLayout from './Layout/DashboardLayout'

function App() {
  return (


    <Routes>

      {/* public layout */}
      <Route element={<Layout />}>
      <Route index  element={<div>this</div>}/>
      </Route>

     
{/* //admin layout */}
 <Route path="admin" element={<DashboardLayout />}>
      <Route index  element={<div>this s==is admin dashboard page</div>}/>
      </Route>




      <Route path='/login' element={<div>this is login</div>}/>
    </Routes>


  )
}

export default App