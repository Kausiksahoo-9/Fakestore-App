import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function Women(){

    const [women, setWomen] = useState([{id:0, title:'', price:'', image:'', description:'', category:'', rating:{rate:0, count:0}}]);

    const [cookies,setCookie,removeCookie]=useCookies(['userid']);

    let navigate = useNavigate();

    useEffect(()=>{
        if(cookies['userid']){
            axios.get("https://fakestoreapi.com/products/category/women's clothing")
            .then(response=>{
                setWomen(response.data);
            })
        }
        else{
            navigate('/login');
        }
    },[])

    function handleSignOutClick(){
        removeCookie('userid');
        navigate('/');
    }


    return(
        <div>
             <h3>Hello ! {cookies['userid']}</h3><button onClick={handleSignOutClick} className="btn btn-link">SignOut</button>
            <div className="d-flex flex-wrap">
            {
                women.map(product=>
                    <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                        <img src={product.image} height="130" className="card-img-top" />
                        <div className="card-header" style={{height:'120px'}}>
                            {product.title}
                        </div>
                            <div className="card-footer">
                            <Link to={`/details/${product.id}`} className='btn btn-dark w-100'>Details</Link>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}