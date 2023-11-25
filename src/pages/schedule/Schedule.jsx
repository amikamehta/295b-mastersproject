
import { Delete } from "@material-ui/icons";
import "./schedule.css"
import { DataGrid } from '@material-ui/data-grid';
import "../../dummyData.js"
import { userRows } from "../../scheduleDummyData.js";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Schedule() {
    const [data,setData] = useState(userRows)

const handleDelete = (id)=>{
    setData(data.filter((item) => item.id !== id))
}
const columns = [
    { field: 'id', headerName: 'ID', type:'number', width: 100,sortable: true,headerAlign: 'center', align:'center' },
    { field: 'Camera#', headerName: 'Camera#', type:'number',sortable: true, width: 140,headerAlign: 'center',align:'center' },
    { field: 'Location', headerName: 'Location', type: 'String', width: 120,headerAlign: 'center',align:'center'},
    { field: 'Severity', headerName: 'Severity',sortable: true, width: 130,headerAlign: 'center',align:'center' },
    { field: 'Asignee', headerName: 'Asignee', type:'String', sortable: false,width: 120,headerAlign: 'center',align:'center'},
    { field: 'Status', headerName: 'Status', type:'String',sortable: false,width: 120,headerAlign: 'center',align:'center'},
    { field: 'Comments', headerName: 'Comments', type:'String',sortable: false,width: 130,headerAlign: 'center',align:'center'},
    { field: 'Action', headerName: 'Action', type:'String',sortable: false,width: 120,headerAlign: 'center',align:'center',
        renderCell:(params)=>{
            return(
                <>
                {/* Link to a paticular page->params.row */}
                <Link to={"/schedules/"+params.row.id}>
                <button className="editButton">Edit</button>
                </Link>
                <Delete className="deleteButton" onClick={()=>handleDelete(params.row.id)}/></>
            )}
    },
  ];
  
  return (
    <div className="userList">
        <span className="title">
        <h3 className="cameraSchedule">Maintainance Schedule</h3>
        <Link to ={"/addSchedule"}>
        <button className="createButton">Add Schedule</button>
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
