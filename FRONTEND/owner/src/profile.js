import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';




export default function Profile(){

    const [owner,setOwner] = useState([]);
    const [ownerss, setOwnerss] = useState({owner_id:"", owner_first_name:"", owner_last_name:"",owner_password:"",owner_mobile:"", owner_profileImage:""})

    useEffect(()=>{
        Select();
    }, []);

    const owner_id = sessionStorage.getItem("owner_id");


    var Select=()=>{
        debugger;
        axios.get("http://localhost:5000/user/contactowner/"+owner_id).then((result)=>{  
        setOwner(result.data.data);
        console.log(result)
        
        console.log(setOwner)
        debugger;
            
        })
    }

    let getImg = (img) =>{
        return "http://localhost:5000/"+img
    } 


var TextChanged=function (args)
{
    debugger;
    var copyOfOwner = {...ownerss};
    copyOfOwner[args.target.name] = args.target.value;
    setOwnerss(copyOfOwner);
}


var Edit= function(owner_id){
    for(var i=0; i< owner.length; i++)
    {
        if(owner[i].owner_id == owner_id)
        {
            var copyOfOwner = {...owner[i]};
            setOwnerss(copyOfOwner);
            break;
        }
    }
}



let update=()=>{
 
    var obj = {owner_id: owner, owner_first_name: ownerss.owner_first_name, owner_last_name: ownerss.owner_last_name, owner_password: ownerss.owner_password, owner_mobile: ownerss.owner_mobile}
        debugger;
    axios.put("http://localhost:5000/owner/updatepg", obj).then((result)=>{
  
        console.log(result)
        setOwnerss({pg_id:"", owner_id:"",  pg_name:"", pg_type:"", pg_city:"", pg_isVacaent:"", pg_rent:"", pg_address:"",pg_foodType:""})
        Select();
    })
  
}


    return(

        <>
        
        <h1>This is profile</h1>


        {owner.map((p)=>{     
                return(    
                    <div class="card" style={{marginLeft:400, marginRight:400,width:500}}>
                    <div class="card-body">
                        <img src={getImg(p.owner_profileImage)} class="card-img-top" alt="..."/>
                        <h5 class="card-title">Name: {p.owner_first_name}</h5><br/>
                        <h10 class="card-text">Email: {p.owner_email}</h10><br/>
                        <h10 class="card-text">Mobile_No.: {p.owner_mobile}</h10><br/>
                        <hr size="10" width="100%" color="red"></hr><br/>
                        <h7></h7><br/>                       
                    </div>
                    <tr >

                            <td align='center' colSpan={2}>
                            <button  className='btn btn-outline-warning' onClick={()=>{Edit(owner_id)}}>
                                            Edit
                            </button>
                            </td>

                            </tr>
                    </div>
                    
                )}
        )} 



       
<table align='center'>
            <tbody>
            <tr>
                    <td>owner_id:</td>
                    <td>
                        <input type='text' name='owner_id' value={owner_id} onChange={TextChanged}></input>
                    </td>
                </tr>
                <tr>
                    <td>owner_first_name:</td>
                    <td>
                        <input type='text' name='owner_first_name' value={ownerss.owner_first_name} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>owner_last_name:</td>
                    <td>
                        <input type='text' name='owner_last_name' value={ownerss.owner_last_name} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>owner_password:</td>
                    <td>
                        <input type='text' name='owner_password' value={ownerss.owner_password} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>owner_mobile:</td>
                    <td>
                        <input type='text' name='owner_mobile' value={ownerss.owner_mobile} onChange={TextChanged}></input>
                    </td>
                </tr>

                
                <tr >

                    <td align='center' colSpan={2}>
                <button  className='btn btn-success' onClick={update}>
                                    Update
                </button>
                    </td>
                
                </tr>
            </tbody>
        </table><br/>
    


        
        
        </>
    )




}