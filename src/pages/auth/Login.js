import { useState } from "react";
import Jumbotron from "../../components/cards/Jumbotron";
import axios from "axios";
import toast  from "react-hot-toast";

import { useAuth } from "../../context/auth";
import {useNavigate, useLocation} from "react-router-dom";

export default function Login() {

    //state
    //hey

    
    const [email, setEmail]  =useState("ryan@gmail.com");
    const [password, setPassword] = useState("123456");

    //hook

    const [auth,setAuth] = useAuth();
    const navigate = useNavigate();
    const location  =useLocation();

    //console.log(process.env.REACT_APP_API);

    const handlesSubmit  = async (e) => 
    {
        e.preventDefault();
        try 
        {
            const {data} = await axios.post(`/login`,
            {
                email,
                password});
            console.log(data);

                if(data?.error) 
                {
                    toast.error(data.error);
                }
                else
                {   localStorage.setItem('auth',JSON.stringify(data) );
                    setAuth({...auth, token:data.token, user:data.user});
                    
                    toast.success('Login succesfull');
                    navigate(location.state || `/dashboard/${data?.user?.role ===1 ? 'admin':'user'}`);
                }

            
        }
        catch(err)
        {
            console.log(err);
            toast.error('Login failed. Try again ');
        }
    }

    return (
     <div>
        <Jumbotron title = "Login" subtitle ="Welcome to  TFF Register page " />
        

      <div className="container mt-5">

        <div className="row">

            <div className="col-md-6 offset-md-3">
                <form onSubmit={handlesSubmit}> 


                

                <input type ="email" className="form-control mb-4 p-2" placeholder="Enter your email" value={email} onChange ={(e) => setEmail(e.target.value)}/>

                <input type ="password" className="form-control mb-4 p-2" placeholder="Enter your password" value={password} onChange ={(e) => setPassword(e.target.value)}/>


                <button className="btn btn-primary " type ="submit" >Login</button>

                </form>



            </div>

        </div>

      </div>
      
     </div>
    );
  }


  