import { useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export function Login(){
    

    const [userid,setuserId]=useState('');
    const [cookies,setCookie,removeCokkie]=useCookies('userid');
    let navigate = useNavigate();

    function handleIdChange(e){
        setuserId(e.target.value);
    }

    function handleLoginClick(){
        setCookie('userid',userid);
        navigate('/');
    }

    return(
        <div className="d-flex d-wrap justify-content-center align-items-center">
        <div>
            <h2 className="bi bi-person-fill mt-5">User Login</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onChange={handleIdChange} /></dd>
                <dt>Password</dt>
                <dd><input type="password"/></dd>
            </dl>
            <button onClick={handleLoginClick} className="btn btn-primary w-100">Login</button>
        </div>
        </div>
    )
}