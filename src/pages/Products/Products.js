import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import avatar from "../../assets/image/74.jpg"; // Default image
import {initialProducts} from "../../datas"

export default function Products() {
  const [productData, setProductData] = useState(initialProducts);

  // Delete function
  const handleDelete = (id) => {
    setProductData(productData.filter(product => product.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "title",
      headerName: "Product Name",
      flex: 2,
      renderCell: (params) => (
        <div className="flex items-center space-x-3">
          <img 
            src={params.row.img || avatar} 
            alt={params.row.title} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>{params.row.title}</span>
        </div>
      )
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      renderCell: (params) => <span>{params.row.price || 'N/A'}</span>
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center space-x-4">
          {/* Edit Button - Navigates to /product/:id */}
          <Link to={`/product/${params.row.id}`} className="text-blue-500 hover:text-blue-700">
            <AiOutlineEdit size={20} />
          </Link>
          {/* Delete Button */}
          <button onClick={() => handleDelete(params.row.id)} className="text-red-500 hover:text-red-700">
            <AiOutlineDelete size={20} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col p-5 overflow-hidden">
      <div className="flex-grow">
        <DataGrid 
          rows={productData}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
