import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../datas";
import avatar from "../../assets/image/74.jpg";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Users() {
  const [userData, setUserData] = useState(userRows);

  // Delete function
  const handleDelete = (id) => {
    setUserData(userData.filter(user => user.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "user",
      headerName: "User",
      flex: 2,
      renderCell: (params) => (
        <div className="flex items-center space-x-3">
          <img src={avatar} alt="" className="w-10 h-10 rounded-full object-cover"/>
          <span>{params.row.username}</span>
        </div>
      )
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      renderCell: (params) => <span>{params.row.amount || 'N/A'}</span>
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <span className={`px-3 py-1 rounded-lg text-white ${
          params.row.status === "green" ? "bg-green-500" : "bg-red-500"
        }`}>
          {params.row.status || 'N/A'}
        </span>
      )
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center space-x-4">
          {/* Edit Button - Navigates to /user/:id */}
          <Link to={`/user/${params.row.id}`} className="text-blue-500 hover:text-blue-700">
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
          rows={userData}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
