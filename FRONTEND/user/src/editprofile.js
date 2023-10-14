import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function EditProfile(){

    const [user,setUser] = useState([]);
    const [userss, setUserss] = useState({user_id:"", user_first_name:"", user_last_name:"",user_email:"",user_password:"",user_mobile:"", user_profileImage:""})
    const history = useHistory();

    const user_id = sessionStorage.getItem("user_id")

    let update=()=>{
 
        var obj = {user_first_name: userss.user_first_name, user_last_name: userss.user_last_name , user_email: userss.user_email, user_password: userss.user_password, user_mobile: userss.user_mobile}
            debugger;
            axios.post("http://localhost:5000/user/updateprofile/"+user_id, obj).then((result)=>{
      
            console.log(result)
            setUserss({user_id:"", user_first_name:"", user_last_name:"",user_email:"",user_password:"",user_mobile:"", user_profileImage:""})
        })
      
    }

    var Select=()=>{
        debugger;
        axios.get("http://localhost:5000/user/getuserbyid/"+user_id).then((result)=>{  
        setUser(result.data.data);
        console.log(result)
        
        debugger;
            
        })
    }
    useEffect(()=>{
        Select();
    }, []);


    var Edit= function(user_id){
        for(var i=0; i< user.length; i++)
        {
            if(user[i].user_id == user_id)
            {
                var copyOfUser = {...user[i]};
                setUserss(copyOfUser);
                console.log(setUserss)
                break;
            }
        }
    }


    var TextChanged=function (args)
    {
        debugger;
        var copyOfUser = {...userss};
        copyOfUser[args.target.name] = args.target.value;
        setUserss(copyOfUser);
    }

    
  




return (
    <>
      <center>
          <form style={{width:"30%",margin:"5%",border: '1px solid blue', borderRadius: '15px'}}>
              <div class="mb-3" style={{textAlign: "left",margin:"3%" }}>
                  <label for="exampleInputEmail1" class="form-label" >Owner ID</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='user_id' value={user_id} onChange={TextChanged}/>
              </div>

              <div class="mb-3" style={{textAlign: "left",margin:"3%" }}>
                  <label for="exampleInputEmail1" class="form-label" >First Name</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='user_first_name' value={userss.user_first_name} onChange={TextChanged}/>
              </div>

              <div class="mb-3" style={{textAlign: "left",margin:"3%" }}>
                  <label for="exampleInputPassword1" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" name='user_last_name' value={userss.user_last_name} onChange={TextChanged}/>
              </div>

              <div class="mb-3" style={{textAlign: "left",margin:"3%" }}>
                  <label for="exampleInputEmail1" class="form-label" >Email</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='user_email' value={userss.user_email} onChange={TextChanged}/>
              </div>

            
              <div class="mb-3" style={{textAlign: "left",margin:"3%" }}>
                  <label for="exampleInputEmail1" class="form-label" >Password</label>
                  <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='user_password' value={userss.user_password} onChange={TextChanged}/>
              </div>

              <div class="mb-3" style={{textAlign: "left",margin:"3%" }}>
                  <label for="exampleInputEmail1" class="form-label" >Mobile</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='user_mobile' value={userss.user_mobile} onChange={TextChanged}/>
              </div>
              
              <div class="row" style={{width:"95%",margin:"3%"}}>
             
                  <button type="button" class="btn btn-primary btn-lg btn-block" onClick={update}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                      </svg> Update
                  </button>
              </div>
          </form>
      </center>
    </>
);

}