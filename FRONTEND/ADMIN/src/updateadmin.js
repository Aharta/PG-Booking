// import {useEffect, useState} from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

// function UpdateAdmin()
// {


//     var [admin,setAdmin] = useState([]);
//     var [message,setMessage] = useState("");
//     var history = useHistory();


//     let TextChanged = (args)=>{
//         var copyofInput = {...input};
//         copyofInput[args.target.name]= args.target.value;
//         setInput(copyofInput);
//     }

//     var Edit = function(owner_id)
//     {
//         for (var i = 0; i< admin.length; i++)
//         {
//             if(admin[i].owner_id == owner_id)
//             {
//                 debugger;
//                 var copyOfAdmin = {...admin[i]};
//                 debugger;
//                 //copyOfAdmin[args.target.name] = args.target.value;
//                 setAdmin(copyOfAdmin);
//                 console.log(copyOfAdmin)
//             }
//         }
//     }
    

//     return(
//         <>

//         <table align='center'>
//             <tbody>
//                 <tr>
//                     <td>Owner_First_Name:</td>
//                     <td>
//                         <input type='text' name='owner_first_name' value={own.owner_first_name} onChange={TextChanged}></input>
//                     </td>
//                 </tr>

//                 <tr>
//                     <td>Owner_Last_Name:</td>
//                     <td>
//                         <input type='text' name='owner_last_name' value={own.owner_last_name} onChange={TextChanged}></input>
//                     </td>
//                 </tr>

//                 <tr>
//                     <td>Owner_Email:</td>
//                     <td>
//                         <input type='text' name='owner_email' value={own.owner_email} onChange={TextChanged}></input>
//                     </td>
//                 </tr>

//                 <tr>
//                     <td>Owner_Password:</td>
//                     <td>
//                         <input type='text' name='owner_password' value={own.owner_password} onChange={TextChanged}></input>
//                     </td>
//                 </tr>

//                 <tr>
//                     <td>Owner_Mobile:</td>
//                     <td>
//                         <input type='text' name='owner_mobile' value={own.owner_mobile} onChange={TextChanged}></input>
//                     </td>
//                 </tr>
//                 <tr >

//                     <td align='center' colSpan={2}>
//                 <button  className='btn btn-success' onClick={Insert}>
//                                     Add Owner
//                 </button></td>
                
//                 </tr>
//             </tbody>
//         </table>






//         <div className='table-responsive'>
//             {message}
//             <table className='table table-bordered'>
//                 <thead>
//                     <th>owner_id</th>
//                     <th>owner_first_name</th>
//                     <th>owner_last_name</th>
//                     <th>owner_email</th>
//                     <th>owner_password</th>
//                     <th>owner_mobile</th>
//                 </thead>
//                 <tbody>
//                  {
//                     owner.map((own)=>{
//                         return <tr>
//                             <td>{own.owner_id}</td>
//                             <td>{own.owner_first_name}</td>
//                             <td>{own.owner_last_name}</td>
//                             <td>{own.owner_email}</td>
//                             <td>{own.owner_password}</td>
//                             <td>{own.owner_mobile}</td>
                            
//                     </tr>
//                     })
//                 }
//                 </tbody>
//             </table>

//         </div>
        
//         </>
//     )

// }

// export default UpdateAdmin;