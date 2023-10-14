import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


function DeleteOwner(props)
{
    var [owner, setOwner] = useState([]);
    var [message, setMessage] = useState("");
    var [own, setOwn] = useState({owner_first_name:"",owner_last_name:"",owner_email:"",owner_password:"",owner_mobile:""});
    

    useEffect(()=>{
        Select();
    }, []);

    var Select = function()
    {

        var helper = new XMLHttpRequest();
        
        helper.onreadystatechange =()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {
                var result = JSON.parse(helper.responseText);
                setOwner(result.data);
            }
        }
        helper.open("GET", "http://localhost:5000/admin/viewowner");
        helper.send();
    }

    var Delete = function (owner_id)
    {
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange= ()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {
                debugger;
                var result = JSON.parse(helper.responseText);
                console.log(result)
                if(result.data.affectedRows > 0)
                {
                    console.log(props)
                    debugger;
                    setMessage("Record removed Successfully!!");
                    Select()
                    props.setUser();
                }
            }
        }
        helper.open("DELETE","http://localhost:5000/admin/deleteowner/" + owner_id);
        helper.send();
    }

    return(
        <>
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
                    <th>Delete Owner</th>
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
                            <td>
                                <button className='btn btn-danger' onClick={()=>{Delete(own.owner_id)}}>Delete Owner</button>
                            </td>
                    </tr>
                    })
                }
                </tbody>
            </table>

        </div>
        
        </>
    )
}
export default DeleteOwner;