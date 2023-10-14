import axios from 'axios';
import {useEffect, useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function ContactOwner(){


    const [owner,setOwner] = useState([]);
    const [ownerss, setOwnerss] = useState({owner_id:"", owner_first_name:"", owner_last_name:"",owner_password:"",owner_mobile:"", owner_profileImage:""})

    useEffect(()=>{
        Select();
    }, []);


    const location = useLocation()
    let owner_id = location.state

        console.log(owner_id)

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
    



    return(

        <>
            <h1>Inside Contact Owner </h1>    
        
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
                  
                    </div>
                    
                )}
        )} 


        
        
        
        </>
    )



}