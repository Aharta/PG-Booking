const express=require ("express")
const cryptoJs = require('crypto-js')
const multer = require('multer')
const upload = multer({ dest: 'uploads' })
const db=require("../db")
const router=express.Router()
const utils=require("../utils")


router.post("/register", (request, response) => {
  const { user_first_name, user_last_name, user_email, user_password, user_mobile} = request.body
  const encryptedPassword = String(cryptoJs.SHA256(user_password))
  console.log(request.body)
  db.query(
    "INSERT INTO users(user_first_name, user_last_name, user_email, user_password, user_mobile) VALUES(?,?,?,?,?)",
    [user_first_name, user_last_name, user_email, encryptedPassword, user_mobile],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

router.post("/userlogin", (request, response) => {
  const { user_email, user_password } = request.body
  const encryptedPassword = String(cryptoJs.SHA256(user_password))
  const statement = "SELECT * FROM users WHERE user_email=? and user_password=?"
  db.query(statement,[user_email, encryptedPassword],(error,result)=>{
    if(!error && result.length > 0)
    {
      const users = result[0]
       response.send(utils.createResult(null,{
        user_id: users['user_id'],
        user_first_name: users['user_first_name'],
        user_email: users['user_email'],
        user_mobile: users['user_mobile'],
        isValid : "true"
       }));
    }
    else{
        response.send({isValid : "false"});
    }
  })

})

router.get("/contactowner/:id",(request,response)=>{
  const id = request.params.id
  const statement=`SELECT * FROM owner where owner_id = ?`
  console.log("inside contact")
  console.log(request.params.id)
  db.query(statement,[id],(error,result)=>{
      console.log(error)
      response.send(utils.createResult(error,result))
  })
})

router.get("/viewpg",(request,response)=>{
  const statement=`SELECT * FROM pg`
  db.query(statement,(error,result)=>{
      response.send(utils.createResult(error,result))
  })
})

//-----view pg by city
router.get("/viewpgbycity/:pg_city",(request,response)=>{
  const statement=`SELECT * FROM pg where pg_city = ?`
  const pg_city = request.params.pg_city
  db.query(statement,[pg_city],(error,result)=>{
      response.send(utils.createResult(error,result))
  })
})


//----------update profile api
router.put("/updateprofile",(request,response)=>{
  const { user_first_name, user_last_name, user_email, user_password, user_mobile, user_gender, user_address, user_id} = request.body
  //const owner_id = request.params.id 
  console.log(request.body)
  const encryptedPassword = String(cryptoJs.SHA256(user_password))
  db.query(
    "UPDATE users set user_first_name=?, user_last_name=?, user_email=?, user_password=?, user_mobile=?, user_gender=?, user_address=? where user_id = ?",
    [user_first_name, user_last_name, user_email, encryptedPassword, user_mobile, user_gender, user_address, user_id],
    (error, result) => {
    response.send(utils.createResult(error, result))
  })
})



//--------upload image api required
router.post("/submitfeedback", (request, response) => {
  const { feedback_description, user_id, pg_id, pg_rating } = request.body
  db.query(
    "INSERT INTO feedback(feedback_description, user_id, pg_id, pg_rating) VALUES(?,?,?,?)",
    [feedback_description, user_id, pg_id, pg_rating],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

router.post("/bookpg", (request, response) => {
  const { user_id, owner_id, pg_id } = request.body
  console.log(request.body)
  db.query(
    "insert into bookings(user_id, owner_id, pg_id) values(?,?,?)", 
    [user_id, owner_id, pg_id],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

//-------view bookings by user
router.get("/viewbookings/:user_id",(request,response)=>{
  const user_id = request.params.user_id
  const statement = "select u.user_id, p.pg_id, p.pg_Image, p.pg_name, p.pg_city, p.pg_rent from pg p, bookings b, users u where p.pg_id=b.pg_id and b.user_id=u.user_id having u.user_id = ?" 
  console.log(user_id)
  db.query(statement,[user_id],(error,result)=>{
      response.send(utils.createResult(error,result))
  })
})


router.get("/viewpgbyid/:pg_id",(request,response)=>{
  const pg_id = request.params.pg_id
  const statement = "select * from pg where pg_id = ?" 
  console.log(pg_id)
  db.query(statement,[pg_id],(error,result)=>{
      response.send(utils.createResult(error,result))
  })
})

router.get("/getuserbyid/:user_id",(request,response)=>{
  const user_id = request.params.user_id
  const statement = "select * from users where user_id = ?" 
  console.log(user_id)
  db.query(statement,[user_id],(error,result)=>{
      response.send(utils.createResult(error,result))
  })
})

module.exports = router