import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './viewpgdetails.css'; // Import your custom CSS file


function RegisterUser()
{
    var [userss, setUserss] = useState([]);
    var [message, setMessage] = useState("");
    var [user, setUser] = useState({user_first_name:"",user_last_name:"",user_email:"",user_password:"",user_mobile:""});


    useEffect(()=>{

    }, []);

  

    var TextChanged = function(args)
    {
        var copyOfOwner = {...user};
        copyOfOwner[args.target.name] = args.target.value;
        setUser(copyOfOwner);
    }

    var Insert = function()
    {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{

            if(helper.readyState == 4 && helper.status == 200)
            {
                var result = JSON.parse(helper.responseText);
                if(result.data.affectedRows > 0)
                {   
                    toast.success("Registration Successful")
                    setMessage("Record Added Successfully !!");
                    setUser({user_first_name:"",user_last_name:"",user_email:"",user_password:"",user_mobile:""});
                }
            }
        }

        helper.open("POST", "http://localhost:5000/user/register");

        helper.setRequestHeader("Content-Type", "application/json");

        var dataToBePassedInStringFormat = JSON.stringify(user);
        helper.send(dataToBePassedInStringFormat);
    }
     

    return(
        <>
            <center>
              <div style={{width:"50%",margin:"5%",border: '1px solid blue', borderRadius: '15px'}}>
                <label style={{fontSize:"180%", fontFamily:"revert-layer"}}>Register</label><br/>
                  <form>    
                    <div class="row" style={{textAlign: "left",margin:"1%"}}>
                      <div class="col">
                          <label for="exampleInputEmail1" class="form-label" >First Name</label>
                          <input type="text" class="form-control" name="user_first_name"
                          value={user.user_first_name} onChange={TextChanged} placeholder='Enter first name'/>
                      </div>
                      <div class="col">
                          <label for="exampleInputEmail1" class="form-label" >Last Name</label>
                          <input type="text" class="form-control" name="user_last_name" 
                          value={user.user_last_name} onChange={TextChanged} placeholder='Enter last name'/>
                      </div>
                    </div>
    
                    <div class="row" style={{textAlign: "left",margin:"1%"}}>
                      <div class="col">
                          <label for="exampleInputEmail1" class="form-label" >Email</label>
                          <input type="text" class="form-control" name="user_email" 
                          value={user.user_email} onChange={TextChanged} placeholder='Enter email'/>
                      </div>
                      <div class="col">
                          <label for="exampleInputEmail1" class="form-label" >Mobile</label>
                          <input type="text" class="form-control" name="user_mobile" 
                          value={user.user_mobile} onChange={TextChanged} placeholder='Enter number'/>
                      </div>
                    </div>
    
                    <div class="row" style={{textAlign: "left",margin:"1%"}}>
                      <div class="col">
                          <label for="exampleInputEmail1" class="form-label" >Password</label>
                          <input type="text" class="form-control" name="user_password" 
                          value={user.user_password} onChange={TextChanged} placeholder='Enter password'/>
                      </div>
                    </div>
    
                    <div class="row" style={{width:"95%",margin:"2%"}}>
                    <button type="button" class="btn btn-primary btn-lg btn-block" onClick={Insert}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
                            <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"/>
                        </svg> Register
                    </button>
                    </div>
                  </form>
                </div>
                <ToastContainer />
            </center>
          </>
    );
}

            
export default RegisterUser;