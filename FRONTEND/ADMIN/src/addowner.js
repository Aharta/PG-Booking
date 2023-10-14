import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function AddOwner()
{
    var [owner, setOwner] = useState([]);
    var [message, setMessage] = useState("");
    var [own, setOwn] = useState({owner_first_name:"",owner_last_name:"",owner_email:"",owner_password:"",owner_mobile:""});
    var [operation, setOperation] = useState("");
    var [searchText, setSearchText] = useState("");

    useEffect(()=>{
        Select();
    }, []);

    var Select=()=>{
        axios.get("http://localhost:5000/admin/viewowner").then((result)=>{
            setOwner(result.data.data);
            console.log(result)
        })
    }

    var TextChanged = function(args)
    {
        var copyOfOwner = {...own};
        copyOfOwner[args.target.name] = args.target.value;
        setOwn(copyOfOwner);
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
                    setMessage("Record Added Successfully !!");
                    Select();
                    setOwn({owner_first_name:"",owner_last_name:"",owner_email:"",owner_password:"",owner_mobile:""});
                }
            }
        }

        helper.open("POST", "http://localhost:5000/owner/ownerRegistration");

        helper.setRequestHeader("Content-Type", "application/json");

        var dataToBePassedInStringFormat = JSON.stringify(own);
        helper.send(dataToBePassedInStringFormat);
    }
     

    return(
        <>

        <table align='center'>
            <tbody>
                <tr>
                    <td>Owner_First_Name:</td>
                    <td>
                        <input type='text' name='owner_first_name' value={own.owner_first_name} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>Owner_Last_Name:</td>
                    <td>
                        <input type='text' name='owner_last_name' value={own.owner_last_name} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>Owner_Email:</td>
                    <td>
                        <input type='text' name='owner_email' value={own.owner_email} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>Owner_Password:</td>
                    <td>
                        <input type='text' name='owner_password' value={own.owner_password} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>Owner_Mobile:</td>
                    <td>
                        <input type='text' name='owner_mobile' value={own.owner_mobile} onChange={TextChanged}></input>
                    </td>
                </tr>
                <tr >

                    <td align='center' colSpan={2}>
                <button  className='btn btn-success' onClick={Insert}>
                                    Add Owner
                </button></td>
                
                </tr>
            </tbody>
        </table>






        <div className='table-responsive'>
            {message}
            <table className='table table-bordered'>
                <thead>
                    <th>owner_id</th>
                    <th>owner_first_name</th>
                    <th>owner_last_name</th>
                    <th>owner_email</th>
                    <th>owner_password</th>
                    <th>owner_mobile</th>
                </thead>
                <tbody>
                 {
                    owner.map((own)=>{
                        return <tr>
                            <td>{own.owner_id}</td>
                            <td>{own.owner_first_name}</td>
                            <td>{own.owner_last_name}</td>
                            <td>{own.owner_email}</td>
                            <td>{own.owner_password}</td>
                            <td>{own.owner_mobile}</td>
                            
                    </tr>
                    })
                }
                </tbody>
            </table>

        </div>
        
        </>
    )
}

            
export default AddOwner;