
import { Delete } from "@material-ui/icons";
import "./maintainanceTeam.css"
import { DataGrid } from '@material-ui/data-grid';
import "../../maintainanceTeamDummyData.js"
import { userRows } from "../../maintainanceTeamDummyData.js"
import { Link } from "react-router-dom";
import { useState } from "react";


export default function MaintainanceTeam() {
    const [data,setData] = useState(userRows)

const handleDelete = (id)=>{
    setData(data.filter((item) => item.id !== id))
}
const columns = [
    { field: 'id', headerName: 'ID', type:'number', width: 100,sortable: true,headerAlign: 'center', align:'center' },
    { field: 'name', headerName: 'Name', type:'string', width: 140,headerAlign: 'center',align:'center' },
    { field: 'email', headerName: 'Email', type: 'string', width: 140,headerAlign: 'center',align:'center'},
    { field: 'age', headerName: 'Age', type: 'number', width: 140,headerAlign: 'center',align:'center'},
    { field: 'location', headerName: 'Location',sortable: true, width: 150,headerAlign: 'center',align:'center' },
    { field: 'comments', headerName: 'Comments', type:'String',sortable: false,width: 150,headerAlign: 'center',align:'center'},
    { field: 'Action', headerName: 'Action', type:'String',sortable: false,width: 155,headerAlign: 'center',align:'center',
        renderCell:(params)=>{
            return(
                <>
                {/* Link to a paticular page->params.row */}
                <Link to={"/maintainanceTeam/"+params.row.id}>
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
        <Link to ={"/addTeam"}>
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
