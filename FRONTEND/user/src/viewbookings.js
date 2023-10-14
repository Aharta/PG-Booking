import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


export default function ViewBookings(){

    const[booking, setBooking] = useState([]);
    const[bookingss, setBookingss] = useState({user_id:"", pg_id:"",pg_Image:"", pg_name:"", pg_city:"", pg_rent:""})

    useEffect(()=>{
        Select();
    }, []);

    const user_id = sessionStorage.getItem("user_id")

    var Select=()=>{
        debugger;
        axios.get("http://localhost:5000/user/viewbookings/"+user_id).then((result)=>{  
        setBooking(result.data.data);
        console.log(result)
        
        debugger;
            
        })
    }


    let getImg = (img) =>{
        return "http://localhost:5000/"+img
    } 


    return(
        <>
        
        
        {booking.map((p)=>{     
                return (
                    <>
                        <div class="card" style={{width:"20%",margin:"2%"}}>
                            <img src={getImg(p.pg_Image)} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Name: {p.pg_name}</h5>
                                <p>City: {p.pg_city}</p>
                                <p>Mobile No.: {p.pg_mobile}</p>
                            </div>
                        </div>
                    </>
                  );}
        )} 

        
        
        </>




    )



}