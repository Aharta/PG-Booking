import {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';


export default function Profile(){

    const [user,setUser] = useState([]);
    const [userss, setUserss] = useState({user_id:"", user_first_name:"", user_last_name:"",user_email:"",user_password:"",user_mobile:"", user_profileImage:""})
    const history = useHistory();

    useEffect(()=>{
        Select();
    }, []);


    const user_id = sessionStorage.getItem("user_id")


    var Select=()=>{
        debugger;
        axios.get("http://localhost:5000/user/getuserbyid/"+user_id).then((result)=>{  
        setUser(result.data.data);
        console.log(result)
        
        debugger;
            
        })
    }

    let viewbooking =()=>{
        history.push('/viewbookings')
    }

    var TextChanged=function (args)
    {
        debugger;
        var copyOfUser = {...userss};
        copyOfUser[args.target.name] = args.target.value;
        setUserss(copyOfUser);
    }

    


    var Edit= function(user_id){
        for(var i=0; i< user.length; i++)
        {
            if(user[i].user_id == user_id)
            {
                var copyOfUser = {...user[i]};
                setUserss(copyOfUser);
                break;
            }
        }
    }

    var navigate = () =>{
        history.push("/editprofile")
    }


    return(

        <>
        
        {user.map((p)=>{     
                 return (
                    <section className="vh-100" style={{ backgroundColor: '#f5f5f7' }}>
                      <MDBContainer className="py-5 h-100">
                        <MDBRow className="justify-content-center align-items-center h-100">
                          <MDBCol lg="6" className="mb-4 mb-lg-0">
                            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                              <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="Avatar" className="my-5" style={{ width: '150px' }} fluid />
                                  
                                  <MDBIcon far icon="edit mb-5" />
                                </MDBCol>
                                <MDBCol md="8">
                                  <MDBCardBody className="p-4">
                                    <MDBTypography tag="h6">Information</MDBTypography>
                                    <hr className="mt-0 mb-4" />
                                    
                                    <MDBRow className="pt-1">
                                      <MDBCol size="6" className="mb-3">
                                        <MDBTypography tag="h6">Name</MDBTypography>
                                        <MDBCardText className="text-muted">{p.user_first_name}</MDBCardText>
                                      </MDBCol>
                
                                      <MDBCol size="6" className="mb-3">
                                        <MDBTypography tag="h6">Phone</MDBTypography>
                                        <MDBCardText className="text-muted">{p.user_mobile}</MDBCardText>
                                      </MDBCol>
                                    </MDBRow>
                
                                    <MDBRow className="pt-1">
                                      <MDBCol size="6" className="mb-3">
                                        <MDBTypography tag="h6">Email</MDBTypography>
                                        <MDBCardText className="text-muted">{p.user_email}</MDBCardText>
                                      </MDBCol>
                                      <button type="button" class="btn btn-success" onClick={navigate}>Edit
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                    </MDBRow>
                                  </MDBCardBody>
                                </MDBCol>
                              </MDBRow>
                            </MDBCard>
                          </MDBCol>
                        </MDBRow>
                      </MDBContainer>
                    </section>
                  );}
        )} 


         





        
        </>

    )


}