import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './viewpgdetails.css'; // Import your custom CSS file

export default function ViewPgDetails() {
    const [pg, setPg] = useState([]);
    const location = useLocation();
    const history = useHistory();
    const pg_id = location.state;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/user/viewpgbyid/${pg_id}`);
            setPg(response.data.data);
            console.log("Fetched data:", response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    let getImg = (img) =>{
        return "http://localhost:5000/"+img
    } 

    const user_id = sessionStorage.getItem("user_id");

    const bookPg = (user_id, owner_id, pg_id) => {
        const obj = { user_id, owner_id, pg_id };
        axios.post("http://localhost:5000/user/bookpg", obj)
            .then((result) => {
                console.log("Booking successful:", result.data);
                toast.success("Booking successful");
                // history.push("/bookpg");
            })
            .catch((error) => {
                console.error("Error booking:", error);
                toast.error("Error booking the PG");
            });
    };

    const contactOwner = (ownerId) => {
        history.push({
            pathname: "/contactowner",
            state: ownerId
        });
    };

    return (
        <div className="pg-details-container">
            {pg.map((p) => (
                 <div class="card" style={{width:"20%",margin:"2%"}}>
                 <img src={getImg(p.pg_Image)} class="card-img-top" alt="..."/>
                 <div class="card-body">
                     <h5 class="card-title">Name: {p.pg_name}</h5>
                     <p>ID: {p.pg_id}</p>
                     <p>City: {p.pg_city}</p>
                     <p>Rent: ₹ {p.pg_rent}</p>
                     <div class="d-grid gap-1 d-md-flex justify-content-md-end">
                         <button class="btn btn-primary me-md-2" type="button" onClick={() => contactOwner(p.owner_id)}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                 <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                             </svg> Contact
                         </button>
                         <button class="btn btn-success" type="button" onClick={() => bookPg(user_id, p.owner_id, p.pg_id)}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                             </svg> Book
                         </button>
                     </div>
                 </div>
             </div>
            ))}
            <ToastContainer />
        </div>
    );
}
