import { LineStyle, Timeline,TrendingUp,PermIdentity,Storefront,AttachMoney,BarChart,MailOutline,DynamicFeed,ChatBubbleOutline,WorkOutline,Report } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function sidebar() {
  return (
    <div className='side flex-1 h-[calc(100vh-50px)] sticky bg-gray-100'>
        <div className="side-wrapper p-[20px]">
        <div className="side-menu mb-2 text-gray-600">
                <h3 className="side-Title text-gray-400 text-sm">dashbord</h3>
                <ul className='side-list p-[5px]'>
                    <Link to="/">
                        <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                            <LineStyle className='side-icon '/>
                            Home
                        </li>
                    </Link>
                    <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                        <Timeline/>
                        Analythic 
                    </li>
                    <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                        <TrendingUp/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="side-menu mb-2 text-gray-600">
                <h3 className="side-Title text-gray-400 text-sm">Quick menu</h3>
                <ul className='side-list p-[5px]'>
                    <Link to="/users">
                        <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                            <PermIdentity className='side-icon '/>
                            Users
                        </li>
                    </Link>
                    <Link to="/newUser">
                        <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                            <PermIdentity/>
                            New users 
                        </li>
                    </Link>
                    <Link to="/products">
                        <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                            <Storefront/>
                            Products
                        </li>
                    </Link>
                    <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                        <AttachMoney/>
                        Transaction
                    </li>
                    <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                        <BarChart/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="side-menu mb-2 text-gray-600">
                <h3 className="side-Title text-gray-400 text-sm">Notifications</h3>
                <ul className='side-list p-[5px]'>
                    <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                        <MailOutline className='side-icon '/>
                        Mail
                    </li>
                    <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                        <DynamicFeed/>
                        Feedback 
                    </li>
                    <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                        <ChatBubbleOutline/>
                        Messages
                    </li>
                    
                </ul>
            </div>
            <div className="side-menu text-gray-600">
                <h3 className="side-Title text-gray-400 text-sm">Staff</h3>
                <ul className='side-list p-[5px]'>
                    <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                        <WorkOutline className='side-icon '/>
                        Manage
                    </li>
                    <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                        <LineStyle/>
                        Analythic 
                    </li>
                    <li className='side-item p-[5px] flex items-center rounded-2xl hover:bg-gray-200 active:bg-gray-200 mr-4'>
                        <Report/>
                        Report
                    </li>
                    
                </ul>
            </div>
            
        </div>
    </div>
  )
}
