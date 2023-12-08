
import { Delete } from "@material-ui/icons";
import "./maintainanceTeam.css"
import { DataGrid } from '@material-ui/data-grid';
import "../../maintainanceTeamDummyData.js"
import { userRows } from "../../maintainanceTeamDummyData.js"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function MaintainanceTeam() {
    const [data, setData] = useState([]);

    // Fetch team data from the API
    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await axios.get('http://localhost:4000/manage_profile');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching team data:', error);
            }
        };

        fetchTeam();
    }, []);

    // Handle delete team member
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/manage_profile/${id}`);
            setData(data.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Error deleting team member:', error);
        }
    };
const columns = [
    { field: 'id', headerName: 'ID', type:'number', width: 100,sortable: true,headerAlign: 'center', align:'center' },
    { field: 'name', headerName: 'Name', type:'string', width: 140,headerAlign: 'center',align:'center' },
    { field: 'email', headerName: 'Email', type: 'string', width: 140,headerAlign: 'center',align:'center'},
    { field: 'age', headerName: 'Age', type: 'number', width: 140,headerAlign: 'center',align:'center'},
    { field: 'location', headerName: 'Location',sortable: true, width: 150,headerAlign: 'center',align:'center' },
    // { field: 'comments', headerName: 'Comments', type:'String',sortable: false,width: 150,headerAlign: 'center',align:'center'},
    { field: 'Action', headerName: 'Action', type:'String',sortable: false,width: 155,headerAlign: 'center',align:'center',
        renderCell:(params)=>{
            return(
                <>
                {/* Link to a paticular page->params.row */}
                <Link to={"/editmaintainanceTeam/"+params.row.id}>
                <button className="editButton">Edit</button>
                </Link>
                <Delete className="deleteButton" onClick={()=>handleDelete(params.row.id)}/></>
            )}
    },
  ];
  
  return (
    <div className="userList">
        <span className="title">
        <h3 className="cameraSchedule">Maintainance Team</h3>
        <Link to ={"/addMember"}>
        <button className="createButton">Add Member</button>
        </Link>
        </span>
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        style={{color:"whitesmoke",fontWeight:400,fontSize:"15px"}}
        />
  </div>
  );
}
