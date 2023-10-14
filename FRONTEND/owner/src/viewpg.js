import axios from 'axios';
import {useEffect, useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';


export default function ViewPg(){

    var [pg, setPg] = useState([]);
    var [pgs,setPgs] = useState({pg_id:"", owner_id:"",  pg_name:"", pg_type:"", pg_city:"", pg_isVacaent:"", pg_rent:"", pg_address:"",pg_foodType:""});
    var [img, setImg] = useState();
    const location = useLocation()
    const history = useHistory();

let pgg = location.state.input
let owner = location.state.owner

let update=()=>{
 
    var obj = {pg_id: pgg, owner_id: owner, pg_name: pgs.pg_name, pg_type: pgs.pg_type, pg_city: pgs.pg_city, pg_isVacaent: pgs.pg_isVacaent, pg_rent: pgs.pg_rent, pg_address: pgs.pg_address, pg_foodType: pgs.pg_foodType}
        debugger;
    axios.put("http://localhost:5000/owner/updatepg", obj).then((result)=>{
  
        console.log(result)
        setPgs({pg_id:"", owner_id:"",  pg_name:"", pg_type:"", pg_city:"", pg_isVacaent:"", pg_rent:"", pg_address:"",pg_foodType:""})
        Select();
    })
  
}


useEffect(()=>{
    Select();
}, []);


var Select=()=>{
    console.log(pgg ,owner)
        var obj = {pg_id: pgg, owner_id: owner}
        console.log(obj)
            axios.post("http://localhost:5000/owner/viewpgbyownerpgid",obj).then((result)=>{     
            setPg(result.data.data);
            console.log(result.data.data)
            
       debugger;
        
    })
}
var obj = {pg_id: pgg, owner_id: owner}

let Delete =()=>{
    var obj = {pg_id: pgg, owner_id: owner}


    axios.delete("http://localhost:5000/owner/deletepg", obj).then((result)=>{
        if(result.data.status === "success"){
                Select();
        }
  
    })
  
  
  }

var TextChanged=function (args)
{
    debugger;
    var copyOfPg = {...pgs};
    copyOfPg[args.target.name] = args.target.value;
    setPgs(copyOfPg);
}

var Edit= function(pg_id){
    for(var i=0; i< pg.length; i++)
    {
        
        if(pg[i].pg_id == pg_id)
        {
            var copyOfPg = {...pg[i]};
            setPgs(copyOfPg);
            break;
        }
    }
}


let getImg = (img) =>{
    return "http://localhost:5000/"+img
} 



let uploadImg =()=>{
    const formData = new FormData()
    formData.append("image",img,img.name)

    axios.post("http://localhost:5000/owner/uploadPgImage/"+pgg, formData).then((result)=>{
        if(result.data.status === "success"){
            
            Select();
            
        }
    })
}

let handleImg =(e)=>{
    setImg(e.target.files[0])
}
  

let viewbook = (id)=>{

    history.push({

        pathname : "/viewbookings",
        state: id
    })
}

let nav = () =>{

    history.push("/updatepg")

} 


const owner_id = sessionStorage.getItem("owner_id")

return(
    <>
            {pg.map((p)=>{     
                return( 
               
                    <div class="card" style={{marginLeft:400, marginRight:400,width:800}}>
                    <img src={getImg(p.pg_Image)} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Name: {p.pg_name}</h5><br/>
                        <h10 class="card-text">Type: {p.pg_type}</h10><br/>
                        <h10 class="card-text">City: {p.pg_city}</h10><br/>
                        <h10 class="card-text">Is_Vacaent: {p.pg_isVacaent}</h10><br/>
                        <h10 class="card-text">Address: {p.pg_address}</h10><br/>
                        <h10 class="card-text">Food Type: {p.pg_foodType}</h10><br/>
                        <span class="material-symbols-outlined">Rent: ₹{p.pg_rent}</span><br/>
                        <h7></h7>
                       
                        <p></p>
                        <button type="button" class="btn btn-outline-warning" onClick={()=>{
                                        Edit(p.pg_id)
                                    }}>
                            Edit
                        </button>
                        <button type="button" class="btn btn-outline-info"onClick={()=>{
                            viewbook(p.pg_id)
                        }} >
                            ViewBookings
                        </button>
                    </div>
                    </div>
                    
                         
                    )}
        )} 
                
                <table align='center'>
            <tbody>
            <tr>
                    <td>pg_id:</td>
                    <td>
                        <input type='text' name='pg_name' value={pgg} onChange={TextChanged}></input>
                    </td>
                </tr>
                <tr>
                    <td>pg_name:</td>
                    <td>
                        <input type='text' name='pg_name' value={pgs.pg_name} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>pg_type:</td>
                    <td>
                        <input type='text' name='pg_type' value={pgs.pg_type} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>pg_city:</td>
                    <td>
                        <input type='text' name='pg_city' value={pgs.pg_city} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>pg_isVacaent:</td>
                    <td>
                        <input type='text' name='pg_isVacaent' value={pgs.pg_isVacaent} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>pg_rent:</td>
                    <td>
                        <input type='text' name='pg_rent' value={pgs.pg_rent} onChange={TextChanged}></input>
                    </td>
                </tr>
                <tr>
                    <td>pg_address:</td>
                    <td>
                        <input type='text' name='pg_address' value={pgs.pg_address} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>pg_foodType:</td>
                    <td>
                        <input type='text' name='pg_foodType' value={pgs.pg_foodType} onChange={TextChanged}></input>
                    </td>
                </tr>

                <tr>
                    <td>owner_id:</td>
                    <td>
                        <input type='text' name='pg_foodType' value={owner_id} onChange={TextChanged}></input>
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
    

        <div align="center">

        <input type="file" name='image' onChange={handleImg}/>
                
                <button type="button" class="btn btn-outline-primary" onClick={uploadImg}> Upload</button>

        </div>
        
                    
    </>

)

}