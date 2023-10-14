import Navbar from './navbar';
import {Link,Switch,Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import Home from './home';
import Login from './login';
import DisplayPg from './displaypg';
import ProtectedRoute from './ProtectedRoute';
import ViewPg from './viewpg';
import AddPG from './addpg';
import ViewBookings from './viewbookings';
import Profile from './profile';
import UpdatePg from './updatepg';





export default function App()
{
    
    const [state, setState] = useState("");

    useEffect(()=>{
     
    },[])

   

    return <>
              
                     <Navbar />
                     <Switch>

                            <Route exact path='/home'
                                   component={Home}></Route>        
                            <Route exact path='/login'>
                                   <Login  setState={setState}/>
                            </Route>
                            <ProtectedRoute exact path='/displaypg'
                                   component={DisplayPg}></ProtectedRoute>
                            <ProtectedRoute exact path='/viewpg'
                                   component={ViewPg}></ProtectedRoute>
                            <ProtectedRoute exact path='/addpg'
                                   component={AddPG}></ProtectedRoute>
                            <ProtectedRoute exact path='/viewbookings'
                                   component={ViewBookings}></ProtectedRoute>
                            <ProtectedRoute exact path='/profile'
                                   component={Profile}></ProtectedRoute>
                            <ProtectedRoute exact path='/updatepg'
                                   component={UpdatePg}></ProtectedRoute>
                     </Switch>

        </>
}

