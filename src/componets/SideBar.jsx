import React from 'react'
import { CgProductHunt } from 'react-icons/cg';
import { MdDashboard } from "react-icons/md";
import { useNavigate } from 'react-router';

const menu = [
    {
        path: "/admin",
        title: "Home",
        icon: <MdDashboard />
    },
    {
        path: "/admin/product",
        title: "Product",
        icon: <CgProductHunt />
    }
]

function SideBar() {
    const navigate = useNavigate()
    return (
        <>
            <div>
                Sidebar
            </div>
            <div className='p-5'>
                {
                    menu.map((el) => {
                        return <div key={el.title}>
                            <div className='flex items-center gap-5 hover:bg-amber-200' onClick={() => navigate(el.path)}>
                                {
                                    el.icon
                                }
                                <p>
                                    {el.title}
                                </p>
                            </div>



                        </div>
                    })
                }
            </div>

        </>
    )
}

export default SideBar