import axios from 'axios';
import {useEffect, useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';


export default function UpdatePg(){
    var [pg, setPg] = useState([]);
    var [pgs,setPgs] = useState({pg_id:"", owner_id:"",  pg_name:"", pg_type:"", pg_city:"", pg_isVacaent:"", pg_rent:"", pg_address:"",pg_foodType:""});
    var [img, setImg] = useState();
    const location = useLocation()
    const history = useHistory();

    let pg_id = location.state.pg_id
    console.log(pg_id)

    var TextChanged=function (args)
    {
        debugger;
        var copyOfPg = {...pgs};
        copyOfPg[args.target.name] = args.target.value;
        setPgs(copyOfPg);
    }

    const owner_id = sessionStorage.getItem("owner_id")

    return (
        <>
          <center>
          <div style={{width:"50%",margin:"5%",border: '1px solid blue', borderRadius: '15px'}}>
              <form>
                <div class="row" style={{textAlign: "left",margin:"1%"}}>
                  <div class="col">
                      <label for="exampleInputEmail1" class="form-label" >PG ID</label>
                      <input type="text" class="form-control" name="pg_id" value={pgs.pg_id} onChange={TextChanged}/>
                  </div>
                  <div class="col">
                      <label for="exampleInputEmail1" class="form-label" >PG Name</label>
                      <input type="text" class="form-control" name='pg_name' value={pgs.pg_name} onChange={TextChanged}/>
                  </div>
                </div>
  
                <div class="row" style={{textAlign: "left",margin:"1%"}}>
                  <div class="col">
                      <label for="exampleInputEmail1" class="form-label" >PG Type</label>
                      <input type="text" class="form-control" name="pg_type" value={pgs.pg_type} onChange={TextChanged}/>
                  </div>
                  <div class="col">
                      <label for="exampleInputEmail1" class="form-label" >City</label>
                      <input type="text" class="form-control" name="pg_city" value={pgs.pg_city} onChange={TextChanged}/>
                  </div>
                </div>
  
                <div class="row" style={{textAlign: "left",margin:"1%"}}>
                  <div class="col">
                      <label for="exampleInputEmail1" class="form-label" >Is Vacant?</label>
                      <input type="text" class="form-control" name="pg_isVacant" value={pgs.pg_isVacaent} onChange={TextChanged}/>
                  </div>
                  <div class="col">
                      <label for="exampleInputEmail1" class="form-label" >Rent</label>
                      <input type="text" class="form-control" name="pg_rent" value={pgs.pg_rent} onChange={TextChanged}/>
                  </div>
                </div>
  
                <div class="row" style={{textAlign: "left",margin:"1%"}}>
                  <div class="col">
                      <label for="exampleInputEmail1" class="form-label" >Address</label>
                      <input type="text" class="form-control" name="pg_address" value={pgs.pg_address} onChange={TextChanged}/>
                  </div>
                </div>
  
                <div class="row" style={{textAlign: "left",margin:"1%"}}>
                  <div class="col">
                      <label for="exampleInputEmail1" class="form-label" >Food Type</label>
                      <input type="text" class="form-control" name='pg_foodType' value={pgs.pg_foodType} onChange={TextChanged}/>
                  </div>
                  <div class="col">
                      <label for="exampleInputEmail1" class="form-label" >Owner ID</label>
                      <input type="text" class="form-control" name="owner_id" value={owner_id} onChange={TextChanged}/>
                  </div>
                </div>
  
                <div class="row" style={{width:"95%",margin:"2%"}}>
                <button type="button" class="btn btn-primary btn-lg btn-block">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                      </svg> Save
                </button>
                </div>
              </form>
            </div>
          </center>
        </>
    )
}