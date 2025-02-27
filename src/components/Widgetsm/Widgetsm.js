import React from 'react'
import avatar from '../../assets/image/74.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {newMember} from '../../datas'
export default function Widgetsm() {
  return (
    <div className='widgetSm flex-1 p-[20px] mr-[20px] shadow'>
        <span className='widgetsmtitle text-[22px] font-semibold'>New join members</span>
        <ul className='widgetsmlist m-0 p-0'>
            {newMember.map(user=>(
                <li key={user.id} className='widgetsmitem flex justify-between item-center mt-[20px]'>
                    <img src={avatar} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover'/>
                    <div className='flex flex-col'>
                        <span className='widgetsmname font-semibold'>{user.username}</span>
                        <span className='widgetsmtitle font-light'>{user.title}</span>
                    </div>
                    <button className='widgetsmbutten flex item-center rounded-[10px] p-2 bg-[#eeeef7] text-[#555]'>
                        <VisibilityIcon className='text-[16px] '/>
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}
