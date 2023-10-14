import {Link,Switch,Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import ProtectedRoute from './ProtectedRoute';
import Home from './home';
import DisplayOwner from './displayowner';
import AddOwner from './addowner';
import DeleteOwner from './deleteowner';
import Login from './login';
import Navbar from './navbar';



function Launcher()
{
    var [user,setUser] = useState("");
    var history = useHistory();

    useEffect(()=>{
       var username = sessionStorage.getItem('username');
       if(username!=null && username!="")
       {
              setUser(username);
       } 
       else{
              setUser("Guest");
       }
    },[])

    return <>
            

            <Navbar/>
            <Switch>
                    <Route exact path='/home'
                           component={Home}></Route>
                    <ProtectedRoute exact path='/displayowner'
                           component={DisplayOwner}></ProtectedRoute>
                    <ProtectedRoute exact path='/addowner'
                           component={AddOwner}></ProtectedRoute>
                    <ProtectedRoute exact path='/deleteowner'
                     component={DeleteOwner}>
                     
                     </ProtectedRoute>
      
                    <Route exact path='/login'
                            component={Login}></Route>

            </Switch>
            <hr></hr>
            
        </>
}

export default Launcher;