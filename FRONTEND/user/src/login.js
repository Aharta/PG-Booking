import {useState} from "react";
import {useHistory} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from "axios";


function Login(props)
{
    var [user,setUser] = useState({user_id:"", user_first_name:"", user_last_name:"", user_email: "", user_password: "", user_mobile:""});
    var [message,setMessage] = useState("");
    var history = useHistory();

    var TextChanged =(args)=>
    {
        debugger;
        var copyOfUser = {...user};
        debugger;
        copyOfUser[args.target.name] = args.target.value;
        setUser(copyOfUser);
        console.log(copyOfUser)
    }

    var Login = (user_id) =>
    {
        debugger;
        axios.post("http://localhost:5000/user/userlogin",user).then((response)=>{
            debugger;
            console.log(response)
            if(response.data.data.isValid === "true")
            {    
                user_id = response.data.data.user_id;
                debugger;
                console.log("user_id"+ user_id)
                sessionStorage.setItem("isLoggedIn","true");
                sessionStorage.setItem("user_id",user_id);
                props.setState(" ")
                history.push("/home");
                setMessage(`Login Successful`)
            }
            else{
                setMessage("Invalid Credentials")
            }
            console.log(response);
        })
    }

  
    return<>    
        <center>
            <div className="table-responsive" style={{width: 400}}>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="text"
                                onChange = {TextChanged}
                                id = "editUsername"
                                name="user_email"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="password"
                                onChange = {TextChanged}
                                id = "editPassword"
                                name = "user_password"/>
                            </td>
                        </tr>
                        <tr>
                            <button className="btn btn-primary" type = "button" onClick={Login} >Sign In</button>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div>
                {message}
            </div>
        </center>
        </>
}

export default Login;
