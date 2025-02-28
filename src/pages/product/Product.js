import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/Chart/Chart'
import { productData } from '../../datas'
import asus from "../../assets/image/d-t-m-bsc-content2-dotask-14267-img-laptop-asus-rog-strix-g17.webp"
import { PublishOutlined } from '@mui/icons-material'
export default function Product() {
  return (
    <div className="w-full">
        <div className="product flex-grow p-5">
            <div className="producttitlecontainer flex items-center justify-between w-full">
                <h1 className="producttitle text-2xl font-semibold">Product</h1>
                <Link to="/newProduct">
                    <button className="w-32 p-2 text-white bg-teal-500 text-lg rounded-xl hover:bg-teal-600 transition">
                        Create
                    </button>
                </Link>
            </div>
            
            {/* Top Section */}
            <div className="producttop flex gap-5">
                {/* Left (Chart) */}
                <div className="producttopleft flex-1 p-5 shadow bg-white rounded-lg">
                    <Chart 
                        title="Sales in Month"
                        data={productData}
                        dataKey="sales"
                    />
                </div>

                {/* Right (Product Info) */}
                <div className="producttopright flex-1 p-5 shadow bg-white rounded-lg">
                    <div className="producttopinfo flex items-center space-x-4">
                        <img src={asus} alt="" className="w-16 h-16 rounded-lg object-cover"/>
                        <span className="productname text-lg font-medium">Asus Gaming Laptop</span>
                    </div>
                    
                    <div className="productinfobottom mt-4 space-y-2">
                        <div className="productinfoitem flex justify-between">
                            <div className="productinfokey font-semibold">ID:</div>
                            <div className="productinfovalue text-gray-600">132</div>
                        </div>
                        <div className="productinfoitem flex justify-between">
                            <div className="productinfokey font-semibold">Name:</div>
                            <div className="productinfovalue text-gray-600">Asus</div>
                        </div>
                        <div className="productinfoitem flex justify-between">
                            <div className="productinfokey font-semibold">Sales:</div>
                            <div className="productinfovalue text-gray-600">85,000$</div>
                        </div>
                        <div className="productinfoitem flex justify-between">
                            <div className="productinfokey font-semibold">Active:</div>
                            <div className="productinfovalue text-gray-600">Yes</div>
                        </div>
                        <div className="productinfoitem flex justify-between">
                            <div className="productinfokey font-semibold">In Stock:</div>
                            <div className="productinfovalue text-gray-600">No</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='productbottom p-[20px] m-[20px] shadow'>
                <form action="" className='flex justify-between'>
                    <div className='productformleft flex flex-col'>
                        <label htmlFor="" className='mb-[10px] text-gray-500'>Product name</label>
                        <input type="text" placeholder='Asus laptob' className=''/>
                        <label htmlFor="" className='mb-[10px] text-gray-500'>In stock</label>
                        <select name="" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="" className='mb-[10px] text-gray-500'>active</label>
                        <select name="" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productformright flex flex-col justify justify-around">
                        <div className='productuploader flex items-center'>
                            <img src={asus} alt="" className='w-[100px] h-[100px] rounded mr-[20px]'/>
                            <label htmlFor="">
                                <PublishOutlined/>
                            </label>
                            <input type="file" name="" id="" className='hidden' />
                        </div>
                        <button className='p-[5px] rounded bg-blue-800 text-[#fff] font-semibold cursor-pointer'>upload(Edit)</button>
                    </div>
                </form>
            </div>  
        </div>
    </div>
  )
}
