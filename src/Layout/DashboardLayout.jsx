import React, { useEffect } from 'react'
import SideBar from '../componets/SideBar'
import AdminHeader from '../componets/AdminHeader'
import { Navigate, Outlet, replace } from 'react-router'
import { toast } from 'react-toastify'

function DashboardLayout() {
    const token = localStorage.getItem("token")
    const role=localStorage.getItem("role")
    useEffect(() => {
        if (!token) {
            toast.error("Please login first!")
        }
    }, [token])

    if (!token) {

        return <Navigate to={"/login"} replace />
    }

     if (role!=="admin") {

        return <Navigate to={"/"} replace />
    }







    return (
        <div className='flex'>
            <div className='w-70 bg-gray-400 overflow-x-hidden-scroll overflow-y-scroll'>
                <SideBar />

            </div>

            <div>
                <AdminHeader />
                <Outlet />

            </div>


        </div>
    )
}

export default DashboardLayout