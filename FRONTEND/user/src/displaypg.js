import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function DisplayPg()
{
    var [pg, setPg] = useState([]);
    var [pgs,setPgs] = useState({pg_id:"", owner_id:"",  pg_name:"", pg_type:"", pg_city:"", pg_isVacaent:"", pg_rent:"", pg_address:"",pg_foodType:""});
    var [image,setImage] = useState({pg_Image:""})
    const history = useHistory();
   
    let viewpg = (input)=>{

        history.push({

            pathname : "/viewpg",
            state: input
        })
    }

    const handleClick = event => {
        console.log(event.target);
    
        console.log('Image clicked');
    }

    

    return(
        <>

<h2 style={{marginLeft:'8%', marginTop: '2%', fontFamily:"sans-serif"}}>We are present in these cities !</h2>
         <div style={{ margin: '30px', display: 'flex', flexDirection: 'row',justifyContent: 'center' }}>
            
            <div style={{marginTop:`20px`}}>
               <img
                  src="https://64.media.tumblr.com/a0a50e6244075f95896f31d88e478b4a/tumblr_mw4yxdG1mC1rv17z8o9_r1_540.pnj"
                  alt="..."
                  style={{ width: 350, height: 320, borderRadius: 100 }}
                  onClick={()=>{viewpg("Pune")}}
               />
            </div>

            <div style={{ marginLeft: `20px`,marginTop:`20px`}}>
               <img
               src="https://64.media.tumblr.com/891ed4d8d51577bbd262aad01745a70e/tumblr_mw4yxdG1mC1rv17z8o5_r1_540.pnj"
               alt="..."
               style={{ width: 350, height: 320, borderRadius: 100 }}
               onClick={()=>{viewpg("Banglore")}}
               />
            </div>

            <div style={{ marginLeft: `20px`,marginTop:`20px`}}>
               <img
               src="https://64.media.tumblr.com/6bc8527dc818147c4f69be3cde545d7d/tumblr_mw4yxdG1mC1rv17z8o2_r2_540.pnj" 
               alt="..."
               style={{ width: 350, height: 320, borderRadius: 100 }}
               onClick={()=>{viewpg("Hyderabad")}}
               />
            </div>

            <div style={{ marginLeft: `20px`,marginTop:`20px`}}>
               <img
               src="https://64.media.tumblr.com/1bb4767e46d61ff773461cd2f1be8d81/tumblr_mw4yxdG1mC1rv17z8o6_r1_540.pnj"
               alt="..."
               style={{ width: 350, height: 320, borderRadius: 100 }}
               onClick={()=>{viewpg("Mumbai")}}
               />
            </div>
         </div>
    
             {/* <button type="button" class="btn btn-outline-info" onClick={()=>{viewpg("Pune")}}>Pune</button>
             <button type="button" class="btn btn-outline-info" onClick={()=>{viewpg("Banglore")}}>Banglore</button>
             <button type="button" class="btn btn-outline-info" onClick={()=>{viewpg("Hyderabad")}}>Hyderabad</button>
             <button type="button" class="btn btn-outline-info" onClick={()=>{viewpg("Mumbai")}}>Mumbai</button> */}

            
        </>
    )
}

export default DisplayPg;