import { Delete } from "@material-ui/icons";
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import "../../dummyData.js"
import { userRows } from "../../dummyData.js";
import { Link } from "react-router-dom";

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
                <Link to={"/editUsers/"+params.row.id}>
                <button className="editButton">Edit</button>
                </Link>
                <Delete className="deleteButton"/></>
            )}
    },
  ];
  
  
export default function UserList() {
  return (
    <div className="userList">
        <span className="title">
        <h3 className="cameraSchedule">Active User List</h3>
        <Link to ={"/addUser"}>
        <button className="createButton">Add New User</button>
        </Link>
        </span>
            <DataGrid
            rows={userRows}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            style={{color:"whitesmoke",fontWeight:400,fontSize:"15px"}}
            />
      </div>
  );
}
