import React,{useState} from 'react';
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo"
import MaintainChart from '../../components/maintainChart/MaintainChart';
import MaintainChartRow2 from '../../components/maintainChartRow2/MaintainChartRow2';
import { userRows } from '../../scheduleDummyData';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { Delete } from '@material-ui/icons';
import './maintainDashboard.css';

export default function MaintainDashboard() {
  
  const [data,setData] = useState(userRows)

  const handleDelete = (id)=>{
      setData(data.filter((item) => item.id !== id))
  }
  const columns = [
      { field: 'id', headerName: 'ID', type:'number', width: 100,sortable: true,headerAlign: 'center', align:'center' },
      { field: 'Camera#', headerName: 'Camera#', type:'number',sortable: true, width: 140,headerAlign: 'center',align:'center' },
      { field: 'Severity', headerName: 'Severity',sortable: true, width: 130,headerAlign: 'center',align:'center' },
      { field: 'Status', headerName: 'Status',sortable: true, width: 130,headerAlign: 'center',align:'center' },
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
    <div className='maintainPage'>
        <FeaturedInfo/>
        <MaintainChartRow2/>
      <div className='chartAndTableContainer'>
        <MaintainChart />
        <div className='tableContainer'>
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            style={{ color: 'whitesmoke', fontWeight: 400, fontSize: '15px' }}
          />
        </div>
      </div>
    </div>
  );
}

