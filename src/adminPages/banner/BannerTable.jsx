import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { BASE_URL } from '../../constant'
import { toast } from 'react-toastify'

function BannerTable() {
    const navigate=useNavigate()
    const [data,setData]=useState()
useEffect(() => {
  const fetchBanner = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/banner`);
      setData(response.data.data);
    } catch (err) {
      toast.error("Banner fetch failed");
    }
  };

  fetchBanner();
}, []);



    
  return (
    <div>BannerTable
<button onClick={()=>navigate("create")} className='bg-green-600'>Create Banner</button>
{
    JSON.stringify(data)
}

    </div>
  )
}

export default BannerTable