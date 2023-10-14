import axios from 'axios';
import {useEffect, useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function ViewPg(){

    var [pg, setPg] = useState([]);
    var [pgs,setPgs] = useState({pg_id:"", owner_id:"",  pg_name:"", pg_type:"", pg_city:"", pg_isVacaent:"", pg_rent:"", pg_address:"",pg_foodType:""});
    const location = useLocation()

    const history = useHistory();
    let pg_city = location.state

    console.log(pg_city)

    useEffect(()=>{
        Select();
    }, []);

    var Select=()=>{
        debugger;
        axios.get("http://localhost:5000/user/viewpgbycity/"+pg_city).then((result)=>{  
        setPg(result.data.data);
        console.log(result)
        
        console.log(setPgs)
        debugger;
            
        })
    }


    let getImg = (img) =>{
        return "http://localhost:5000/"+img
    } 

    let pgid = (id)=>{

        history.push({
    
            pathname : "/viewpgdetails",
            state: id
        })
    }
    


return(
    <>
                      {pg.map((p)=>{     
                        return(    
                    <div class="card" style={{marginLeft:400, marginRight:400,width:500}}>
                    <img src={getImg(p.pg_Image)} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Name: {p.pg_name}</h5>
                        <h10 class="card-text">City: {p.pg_city}</h10><br/>
                        <h10 class="card-text">pg_id: {p.pg_id}</h10><br/>
                        <hr size="10" width="100%" color="red"></hr><br/>
                        <span class="material-symbols-outlined">Rent: ₹{p.pg_rent}</span>
                        <h7></h7><br/>
                        <button type="button" class="btn btn-outline-info" onClick={()=>{pgid(p.pg_id)}}>
                            ViewPg
                        </button><br/>

                        
                        
                    </div>
                    </div>
                    
                    )}
        )} 
                
            
    </>

)

}
