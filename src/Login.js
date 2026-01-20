import { useEffect,useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Login(){
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate = useNavigate();
    useEffect(()=>{
    if(localStorage.getItem('user-info'))
        {
            navigate('/add-product');
    }
},[])
async function logindata() {
  let item = { email, password };

  let response = await fetch('http://127.0.0.1:8000/api/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(item)
  });

  let result = await response.json();

  localStorage.setItem('user-info', JSON.stringify(result));
}

    return(
       <div>
       <Header/>
         <div className="col-sm-6 offset-sm-3">
            <h1>User Login</h1>
            <input className="form-control" type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
            <br />
            <input className="form-control" type='password'  onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
            <br />
            <button onClick={logindata} className="btn btn-primary">Submit</button>
        </div>
       </div>
        
    )
}

export default Login;