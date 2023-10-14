const express=require ("express")
const cryptoJs = require('crypto-js')
const multer = require('multer')
const upload = multer({ dest: 'uploads' })
const db=require("../db")
const router=express.Router()
const utils=require("../utils")

router.get("/viewowner",(request,response)=>{
  const statement=`SELECT * FROM owner`
  db.query(statement,(error,result)=>{
      response.send(utils.createResult(error,result))
  })
})

router.get("/viewpg",(request,response)=>{
  const statement=`SELECT * FROM pg`
  db.query(statement,(error,result)=>{
      response.send(utils.createResult(error,result))
  })
})

router.get("/viewfeedback",(request,response)=>{
  const statement=`SELECT * FROM feedback`
  db.query(statement,(error,result)=>{
      response.send(utils.createResult(error,result))
  })
})

router.post("/updateprofile/:id",(request,response)=>{
  const { admin_first_name, admin_last_name, admin_email, admin_address, admin_password, admin_mobile} = request.body
  db.query(
    "UPDATE admin set admin_first_name=?, admin_last_name=?, admin_email=?, admin_address=?, admin_password=?, admin_mobile=?",
    [admin_first_name, admin_last_name, admin_email, admin_address, admin_password, admin_mobile],
    (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//--image api required

  router.delete("/deleteowner/:id",(request,response)=>{
    const id=request.params.id
    const statement=`DELETE FROM owner WHERE owner_id=?`
    db.query(statement,[id],(error,result)=>{    
        response.send(utils.createResult(error,result))   
    })
  })

router.post("/adminlogin", (request, response) => {
    const { admin_email, admin_password } = request.body
    const statement = "SELECT * FROM admin WHERE admin_email=? and admin_password=?"
    const valid = {isValid : "true"};
    db.query(statement,[admin_email, admin_password],(error,result)=>{
      if(!error && result.length > 0)
      {
         response.send(valid);
      }
      else{
          response.send({isValid : "false"});
      }
    })

  })
  module.exports = router