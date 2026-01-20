import Header from "./Header";
import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';

function ProductList(){
    const [data,setData]=useState([]);
useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://127.0.0.1:8000/api/list");
            const json = await res.json();
            setData(json);
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log("Updated data:", data);
    }, [data]);
    return(
        <>
            <Header/>
            <div className="col-md-6 offset-md-3">
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map((item)=>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td><img src={"http://127.0.0.1:8000/storage/"+item.file_path} style={{width:150}}/></td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.price}</td>
        </tr>
        )
      }


      </tbody>
    </Table>
            </div>
             
        </>
    )
}

export default ProductList;