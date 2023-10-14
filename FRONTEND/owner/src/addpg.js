import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


function AddPG()
{
   
    var [pgs,setPgs] = useState({pg_id:"",   pg_name:"", pg_type:"", pg_city:"", pg_isVacaent:"", pg_rent:"", pg_address:"",pg_foodType:"", owner_id:""});
    var [message, setMessage] = useState( "");
    var [img, setImg] = useState();

    useEffect(()=>{

    }, []);

    var ShowMessage = function(msg)
    {
        setMessage(msg);
        setTimeout(() => 
                        {
                            setMessage("");
                        }, 5000);
                    }

    var TextChanged=function (args)
    {
        debugger;
        var copyOfPg = {...pgs};
        copyOfPg[args.target.name] = args.target.value;
        setPgs(copyOfPg);
    }
     
    const owner = sessionStorage.getItem("owner_id")

    var Insert = function()
    {
        var obj ={ pg_name: pgs.pg_name, pg_type: pgs.pg_type, pg_city: pgs.pg_city, pg_isVacaent: pgs.pg_isVacaent, pg_rent: pgs.pg_rent, pg_address: pgs.pg_address,pg_foodType: pgs.pg_foodType, owner_id: owner}
       axios.post("http://localhost:5000/owner/addpg", obj).then((result)=>{
        if(result.data.status === "success"){
            console.log("success")
        }
       })
    }

  



    return(
        <>

      <>
        <center>
          <div style={{width:"30%",margin:"5%",border: '1px solid blue', borderRadius: '15px'}}>
            <form>
              <div class="row" style={{textAlign: "left",margin:"3%" }}>
                <div class="col">
                  <label for="exampleInputEmail1" class="form-label" >PG Name</label>
                  <input type="text" class="form-control" name="pg_name" value={pgs.pg_name} onChange={TextChanged}/>
                </div>
                <div class="col">
                  <label for="exampleInputEmail1" class="form-label" >Type</label>
                  <input type="text" class="form-control" name="pg_type" value={pgs.pg_type} onChange={TextChanged}/>
                </div>
              </div>

              <div class="row" style={{textAlign: "left",margin:"3%" }}>
                <div class="col">
                  <label for="exampleInputEmail1" class="form-label" >City</label>
                  <input type="text" class="form-control" name="pg_city" value={pgs.pg_city} onChange={TextChanged}/>
                </div>
                <div class="col">
                  <label for="exampleInputEmail1" class="form-label" >Vacancy</label>
                  <input type="text" class="form-control" name="pg_isVacaent" value={pgs.pg_isVacaent} onChange={TextChanged}/>
                </div>
                <div class="col">
                  <label for="exampleInputEmail1" class="form-label" >Rent</label>
                  <input type="text" class="form-control" name="pg_rent"  value={pgs.pg_rent} onChange={TextChanged}/>
                </div>
              </div>

              <div class="row" style={{textAlign: "left",margin:"3%" }}>
                <div class="col">
                  <label for="exampleInputEmail1" class="form-label" >Address</label>
                  <input type="text" class="form-control" name="pg_address" value={pgs.pg_address} onChange={TextChanged}/>
                </div>
                <div class="col">
                  <label for="exampleInputEmail1" class="form-label" >Food</label>
                  <input type="text" class="form-control" name="pg_foodType" value={pgs.pg_foodType} onChange={TextChanged}/>
                </div>
              </div>

              <div class="row" style={{textAlign: "left",margin:"3%" }}>
              <button type="button" class="btn btn-primary btn-lg btn-block" onClick={Insert}>AddPG
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
              </button>
              </div>
            </form>
          </div>
        </center>
      </>
  );

            




        
        </>
    )
}

            
export default AddPG;