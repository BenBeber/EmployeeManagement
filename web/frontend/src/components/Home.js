import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Table from "./Table";
import { deleteEmployee } from "./Employee-Components/Actions";


 function Home (){
  
const [employees,setEmployeesData] = useState([]);


useEffect(() => {
  (async () => {
    const result = await axios("http://localhost:8080");
    setEmployeesData(result.data);
  })();
}, []);





const column = useMemo(
() => [
  { Header:"Id",accessor:"id" },
  { Header: "First name", accessor: "firstName"},
  { Header:"Last Name", accessor:"lastName"},
  {Header: "Email", accessor: "email" },
  {Header:"Actions", Cell: (props) => (<button onClick={()=>deleteEmployee(props.row.values.id)} className="btn btn-danger">Delete</button>)},
],
[]
);

    return (
      <div className="Home" >
        <h1 style={{textAlign: "center"}} >Home</h1>
        <Table columns={column} data={employees} />
      </div>
      );
    }  
    export default Home;
