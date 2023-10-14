import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { useState, useEffect } from "react";
import axios from 'axios';



export default function ViewBookings(){

    var [book, setBook] = useState([]);
    var [booking, setBooking] = useState({pg_id:"", user_first_name:"", user_email:"",user_mobile:"",booking_id:""})

const location = useLocation();

let pg_id = location.state;

console.log(pg_id);

useEffect(()=>{
    Select();
}, []);

var Select=()=>{
    debugger;
    axios.get("http://localhost:5000/owner/viewBookings/"+pg_id).then((result)=>{  
    setBook(result.data.data);
    console.log(result)
    
    debugger;
        
    })
}




    return(
        <>
        
        <h1>Bookings in this pg are:</h1>

        {book.map((p)=>{     
                return(    
                    <div class="card" style={{marginLeft:400, marginRight:400,width:500}}>
                    <div class="card-body">
                        <h5 class="card-title">Name: {p.user_first_name}</h5><br/>
                        <h10 class="card-text">Email: {p.user_email}</h10><br/>
                        <h10 class="card-text">Mobile_No.: {p.user_mobile}</h10><br/>
                        <h10 class="card-text">Booking_id: {p.booking_id}</h10><br/>
                        <hr size="10" width="100%" color="red"></hr><br/>
                        <h7></h7><br/>                       
                    </div>
                    </div>
                    
                )}
        )} 
              
        </>
    )

}