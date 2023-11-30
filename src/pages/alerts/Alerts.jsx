
import { Delete } from "@material-ui/icons";
import "./alerts.css"
import { DataGrid } from '@material-ui/data-grid';
import "../../alertsDummyData.js"
import { userRows } from "../../alertsDummyData.js"
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Alerts() {
    const [data,setData] = useState(userRows)

const handleDelete = (id)=>{
    setData(data.filter((item) => item.id !== id))
}
const columns = [
    { field: 'id', headerName: 'ID', type:'number', width: 100,sortable: true,headerAlign: 'center', align:'center' },
    { field: 'type', headerName: 'Type', type:'string', width: 160,headerAlign: 'center',align:'center' },
    { field: 'location', headerName: 'Location', type: 'string', width: 140,headerAlign: 'center',align:'center'},
    { field: 'severity', headerName: 'Severity', type: 'number', width: 130,headerAlign: 'center',align:'center'},
    { field: 'status', headerName: 'Status',sortable: true, width: 140,headerAlign: 'center',align:'center' },
    { field: 'comments', headerName: 'Comments', type:'String',sortable: false,width: 150,headerAlign: 'center',align:'center'},
    { field: 'Action', headerName: 'Action', type:'String',sortable: false,width: 155,headerAlign: 'center',align:'center',
        renderCell:(params)=>{
            return(
                <>
                {/* Link to a paticular page->params.row */}
                <Link to={"/editAlert/"+params.row.id}>
                <button className="editButton">Edit</button>
                </Link>
                <Delete className="deleteButton" onClick={()=>handleDelete(params.row.id)}/></>
            )}
    },
  ];
  
  return (
    <div className="userList">
        <span className="title">
        <h3 className="alertSchedule">Alert Summary</h3>
        <Link to ={"/addAlert"}>
        <button className="createButton">Add Alert</button>
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
