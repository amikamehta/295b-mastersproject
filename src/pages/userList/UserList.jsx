import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Delete } from "@material-ui/icons";
import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import { Link } from "react-router-dom";


  
  
export default function UserList() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/users');
                
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
      console.log(id);
      try {
          
          await axios.delete(`http://localhost:4000/users/${id}`);
          setUsers(users.filter((user) => user.id !== id));
      } catch (error) {
          console.error('Error deleting user:', error);
      }
  };

  const columns = [
    { field: 'id', headerName: 'ID', type:'number', width: 100,sortable: true,headerAlign: 'center', align:'center' },
    { field: 'name', headerName: 'Name', type:'String', width: 140,headerAlign: 'center',align:'center' },
    { field: 'age', headerName: 'Age', type: 'number', width: 100,headerAlign: 'center',align:'center'},
    { field: 'email', headerName: 'Email', type:'String', width: 180,headerAlign: 'center',align:'center' },
    { field: 'location', headerName: 'Location', sortable: false,width: 140,headerAlign: 'center',align:'center'},
    { field: 'type', headerName: 'Type', sortable: false,width: 140,headerAlign: 'center',align:'center'},
    { field: 'action', headerName: 'Action', sortable: false,width: 180,headerAlign: 'center',align:'center',
        renderCell:(params)=>{
            return(
                <>
                {/* Link to a paticular page->params.row */}
                <Link to={"/editUsers/" + params.row.id}>
                        <button className="editButton">Edit</button>
                    </Link>
                    <Delete 
                        className="deleteButton" 
                        onClick={() => handleDelete(params.row.id)}
                    />
                  </>
            )}
    },
  ];
  return (
    <div className="userList">
        <span className="title">
        <h3 className="cameraSchedule">Active User List</h3>
        <Link to ={"/addUser"}>
        <button className="createButton">Add New User</button>
        </Link>
        </span>
        <DataGrid
                rows={users}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                style={{ color: "whitesmoke", fontWeight: 400, fontSize: "15px" }}
            />
      </div>
  );
}
