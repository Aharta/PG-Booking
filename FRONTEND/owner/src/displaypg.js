import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import viewpg from './viewpg';
import { useHistory } from 'react-router-dom';


function DisplayPg()
{
    var [pg, setPg] = useState([]);
    var [pgs,setPgs] = useState({pg_id:"", owner_id:"",  pg_name:"", pg_type:"", pg_city:"", pg_isVacaent:"", pg_rent:"", pg_address:"",pg_foodType:""});
    var [image,setImage] = useState({pg_Image:""})
    const history = useHistory();
    
    useEffect(()=>{
        Select();
    }, []);

    var Select=()=>{
        debugger;
        const owner_id = sessionStorage.getItem("owner_id")
        axios.get("http://localhost:5000/owner/viewpg/"+owner_id).then((result)=>{  
        setPg(result.data.data);
        console.log(result)
        
        console.log(setPgs)
        debugger;
            
        })
    }

    var image = () =>{
        axios.get("http://localhost:5000/owner/viewpgimage/").then((result)=>{
            setImage(result.data.data.pg_Image);
        })
    }

    let viewpg = (input, owner)=>{

        history.push({

            pathname : "/viewpg",
            state: {input:input, owner:owner}
        })
    }

let del = (pg, owner) =>{
    console.log(pg)
    console.log(owner)
    var obj = {pg_id: pg, owner_id: owner}


    axios.post("http://localhost:5000/owner/deletepg",obj).then((result)=>{
        if(result.data.status === "success"){
                Select();
        }
  
    })
}


    let getImg = (img) =>{
        return "http://localhost:5000/"+img
    } 

    return(
        <>
                <div align="center">

                {pg.map((p)=>{     
                        return(    
                            <div class="card"style={{width:"30%",margin:"2%"}}>
                            <img src={getImg(p.pg_Image)} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Name: {p.pg_name}</h5>
                                <p>ID: {p.pg_id}</p>
                                <p>City: {p.pg_city}</p>
                                <p>Rent: ₹ {p.pg_rent}</p>
                                <div class="d-grid gap-1 d-md-flex justify-content-md-end">
                                    <button class="btn btn-primary me-md-2" type="button" onClick={()=>{viewpg(p.pg_id,p.owner_id)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                        </svg> View</button>
                                    <button class="btn btn-danger" type="button" onClick={()=>{ del(p.pg_id, p.owner_id)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                        </svg> Delete</button>
                                </div>
                            </div>
                        </div>
                    
                    )}
        )} 

                </div>


                
            
        </>
    )
}

export default DisplayPg;