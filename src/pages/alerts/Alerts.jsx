import axios from 'axios';
import { Delete } from "@material-ui/icons";
import "./alerts.css"
import { DataGrid } from '@material-ui/data-grid';
import "../../alertsDummyData.js"
import { userRows } from "../../alertsDummyData.js"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Alerts() {
    const [data,setData] = useState([])

    useEffect(() => {
        fetchAlerts();
    }, []);

    const fetchAlerts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/alerts');
            setData(response.data);
        } catch (error) {
            console.error("Fetching alerts failed:", error);
        }
    };
    const handleDelete = async (id) => {
        try {
            // Send a DELETE request to your API endpoint
            await axios.delete('http://localhost:4000/alerts/${id}');
    
            // Update the state to reflect the deletion
            setData(data.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error deleting alert:", error);
        }
    };
// const handleDelete = aysnc (id) => {
//     // setData(data.filter((item) => item.id !== id))
//     try {
//         await axios.delete(http://localhost:4000/alerts/${id});

//         setData(data.filter((item) => item.id !== id));
//     } catch (error) {
//         console.error("Error deleting alert:", error);
//     }
// };

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