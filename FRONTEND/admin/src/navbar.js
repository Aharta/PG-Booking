import {Link,Switch,Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import DisplayOwner from './displayowner';
import Login from './login';



export default function Navbar(){

  const history = useHistory();

  let Logout =()=>{
    sessionStorage.removeItem("isLoggedIn")
    history.push("/home")

  }


    return <>
    <hr></hr>
    
    <hr></hr>
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
                            <a class="nav-link" href="/displayowner">DisplayOwner</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/deleteowner">DeleteOwner</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/addowner">AddOwner</a>
                            </li>

                            { sessionStorage.getItem("isLoggedIn") === "true"? 
                            
                            <>
                            
                            <li class="nav-item" float="left">
                                                      <button type="button" class="btn btn-danger" onClick={Logout}>
                                                        Logout
                                                      </button>
                                                 
                        
                                                    </li>                            
                                                    </> 


                                                    :

                                                    <li class="nav-item" float="left">
                                                      <button type="button" class="btn btn-success">
                                                        <Link to="/login">
                                                          Login
                                                        </Link>
                                                      </button>
                                                 
                        
                                                    </li>

                            }
                         
                            
                        </ul>
                        
                        <li>
                       
                                          
                      </li>
                      
                   
           
             </div>
             </div>
             </nav>
   
    </div>
    <hr></hr>
    
   
    
    <hr></hr>
</>
}