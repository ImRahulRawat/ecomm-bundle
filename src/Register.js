import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function Register(){
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate = useNavigate();

async function signUp() {
    let item = { name, password, email };
    console.warn(item);

    let result = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(item)
    });

    result = await result.json();
    console.warn(result);
    localStorage.setItem("user-info",JSON.stringify(result));
    navigate('/add-product');
}


    return(
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
            <h1>User Sign up</h1>
            <input className="form-control" type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='name' />
            <br />
            <input className="form-control" type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
            <br />
            <input className="form-control" type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
            <br />
        
            <button onClick={signUp} className="btn btn-primary">Submit</button>
        </div>
        </>
    )
}

export default Register;