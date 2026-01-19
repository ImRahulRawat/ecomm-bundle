import { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Protected(props){
    let Cmp = props.Cmp
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
            {
                navigate('/add-product');
        }
    },[])
    return(
       <div>
         <Cmp/>
       </div>
        
    )
}

export default Protected;