import Header from "./Header";
import { useState } from "react";
import React from "react";

function AddProduct(){
    const [name,setName] = useState("");
    const [file,setFile] = useState(null);
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    async function addProduct() {
        if (!file) {
            alert("Please select a file");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);

        const result = await fetch('http://127.0.0.1:8000/api/addProduct', {
            method: 'POST',
            body: formData
        });

        const data = await result.json();
        console.log(data);
    }

    return(
        <>
        <Header/>
          <h1>Add Product</h1>
          <div className="col-sm-6 offset-sm-3">
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="name" className="form-control"/>
            <br/>
            <input type="file" onChange={(e)=>setFile(e.target.files[0])} placeholder="file" className="form-control"/>
            <br/>
            <input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="price" className="form-control"/>
            <br/>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="description" className="form-control"/>
            <br/>
            <button onClick={addProduct}>Add Product</button>
          </div>
        </>
    )
}

export default AddProduct;