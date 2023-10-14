import {useState} from "react";
import {useHistory} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from "axios";


function Login(props)
{
    var [owner,setOwner] = useState({owner_id:"", owner_first_name:"", owner_email: "", owner_password: ""});
    var [message,setMessage] = useState("");
    var history = useHistory();

    var TextChanged =(args)=>
    {
        debugger;
        var copyOfOwner = {...owner};
        debugger;
        copyOfOwner[args.target.name] = args.target.value;
        setOwner(copyOfOwner);
        console.log(copyOfOwner)
    }

    var Login = (owner_id) =>
    {
        debugger;
        axios.post("http://localhost:5000/owner/ownerlogin",owner).then((response)=>{
            debugger;
            console.log(response)
            if(response.data.data.is_Valid === "true")
            {    
                owner_id = response.data.data.owner_id;
                debugger;
                console.log("owner_id"+ owner_id)
                sessionStorage.setItem("isLoggedIn","true");
                sessionStorage.setItem("owner_id",owner_id);
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
                                name="owner_email"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="password"
                                onChange = {TextChanged}
                                id = "editPassword"
                                name = "owner_password"/>
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
