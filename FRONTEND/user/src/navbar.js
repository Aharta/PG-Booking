import {Link,Switch,Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import Home from './home';
import Login from './login';
import DisplayPg from './displaypg';
import ProtectedRoute from './ProtectedRoute';
import Logout from './logout';



export default function Navbar(){

  const history = useHistory();
  const [state,setState]= useState("");


  let Logout =()=>{
    sessionStorage.removeItem("isLoggedIn")
    setState(" ")
    history.push("/home")

  }


    return <>

    <div style={{padding: 20}}>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
             <div class="container-fluid">
             <a class="navbar-brand" href="#">Unistay</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarNav">

             
                        <a class="nav-link" href="/home">Home</a>
              
             
                        <ul class="navbar-nav">
                            
                            <li class="nav-item">         
                            <a class="nav-link" href="/displaypg">DisplayPg</a>
                            </li>
                            
                            <li class="nav-item">         
                            <a class="nav-link" href="/profile">Profile</a>
                            </li>

                            <li class="nav-item">
                            <a class="nav-link" href="/registeruser">Register</a>
                            </li>

                            { sessionStorage.getItem("isLoggedIn") === "true"? 
                            
                            <>
                            {/* Logout logic will go here */}
                            <li class="nav-item" float="left">
                                                      <button type="button" class="btn btn-danger" onClick={Logout}>
                                                        Logout
                                                      </button>
                                                 
                        
                                                    </li>                            
                                                    
                            </> 


                                                    :

                                                    <li class="nav-item" float="left">
                     
                                                    <Link to="/login">Login</Link>
                        
                                                    </li>

                            }
                         
                            
                        </ul>
                        
                        <li>
                       
                                          
                      </li>
                      
                   
           
             </div>
             </div>
             </nav>
   
    </div>
   
</>
}