import {useState} from "react";
import {useHistory} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from "axios";

function Login(props)
{
    var [admin,setAdmin] = useState({admin_email: "", admin_password: ""});
    var [message,setMessage] = useState("");
    var history = useHistory();

    var TextChanged =(args)=>
    {
        debugger;
        var copyOfAdmin = {...admin};
        debugger;
        copyOfAdmin[args.target.name] = args.target.value;
        setAdmin(copyOfAdmin);
        console.log(copyOfAdmin)
    }

    var Login = () =>
    {
        debugger;
        axios.post("http://localhost:5000/admin/adminlogin",admin).then((response)=>{
            debugger;
            if(response.data.isValid === "true")
            {
                sessionStorage.setItem("isLoggedIn","true");
                // sessionStorage.setItem()
                history.push("/home");
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
                            <td>User Name</td>
                            <td>
                                <input type="text"
                                onChange = {TextChanged}
                                id = "editUsername"
                                name="admin_email"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="password"
                                onChange = {TextChanged}
                                id = "editPassword"
                                name = "admin_password"/>
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