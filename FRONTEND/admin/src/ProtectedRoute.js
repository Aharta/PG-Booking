import { Route } from "react-router-dom";
import Login from "./login";
import {useState} from "react";

function ProtectedRoute(props)
{
    var [owner,setOwner] = useState({owner_id:"", owner_first_name:"", owner_email: "", owner_password: ""});

    debugger;
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
    var owner_id = sessionStorage.getItem('owner_id');

    if(isLoggedIn!=null && isLoggedIn == 'true')
    {
        
        return <Route exact path={props.path} 
        component={props.component} />;
    }
    else
    {
       return <>
                <h1>Hey You Need TO login First</h1>
                </>
    }
}

export default ProtectedRoute;