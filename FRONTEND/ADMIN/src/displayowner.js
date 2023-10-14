import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


function DisplayOwner()
{
    var [owner, setOwner] = useState([]);
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


    return(
        <>
        <div className='table-responsive'>

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

export default DisplayOwner;