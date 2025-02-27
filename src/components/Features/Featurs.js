import { ArrowDownward ,ArrowUpward} from '@mui/icons-material'
import React from 'react'
export default function Featurs() {
  return (
    <div className='featurs  flex justify-between'>
        <div className='feature-item flex-1 m-0 p-[30px] rounded cursor-pointer shadow m-3'>
            <span className='feature-title text-[20px]'> Revanue </span>
            <div className='feature-cont flex item-center mt-[10px]'>
                <span className='feature-money text-[30px] font-semibold'>$23000</span>
                <span className='feature-rate flex items-center ml-[20px]'>  
                    -11% <ArrowDownward className='feature-icon text-red-600 ml-[5px] text-[14px]'/>
                </span>
            </div>
            <span className='feature-sub text-[15px] text-gray-500'>Compared to last month</span>
        </div>
        <div className='feature-item flex-1 m-0 p-[30px] rounded cursor-pointer shadow m-3'>
            <span className='feature-title text-[20px]'> Sales </span>
            <div className='feature-cont flex item-center mt-[10px]'>
                <span className='feature-money text-[30px] font-semibold'>$23000</span>
                <span className='feature-rate flex items-center ml-[20px]'>  
                    -2.5% <ArrowDownward className='feature-icon text-red-600 ml-[5px] text-[14px]'/>
                </span>
            </div>
            <span className='feature-sub text-[15px] text-gray-500'>Compared to last month</span>
        </div>
        <div className='feature-item flex-1 m-0 p-[30px] rounded cursor-pointer shadow m-3'>
            <span className='feature-title text-[20px]'> Costs </span>
            <div className='feature-cont flex item-center mt-[10px]'>
                <span className='feature-money text-[30px] font-semibold'>$23000</span>
                <span className='feature-rate flex items-center ml-[20px]'>  
                    -4% <ArrowUpward className='feature-icon text-green-600 ml-[5px] text-[14px]'/>
                </span>
            </div>
            <span className='feature-sub text-[15px] text-gray-500'>Compared to last month</span>
        </div>
        
    </div>
    
  )
}
