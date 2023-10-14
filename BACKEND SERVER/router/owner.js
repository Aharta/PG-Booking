const express=require ("express")
const cryptoJs = require('crypto-js')
const multer = require('multer')
const upload = multer({ dest: 'uploads' })
const db=require("../db")
const router=express.Router()
const utils=require("../utils")



//----owner registration api----
router.post("/ownerRegistration", (request, response) => {
  const { owner_first_name, owner_last_name, owner_email, owner_password, owner_mobile} = request.body
  // encrypt the password
  const encryptedPassword = String(cryptoJs.SHA256(owner_password))

  db.query(
    "INSERT INTO owner(owner_first_name, owner_last_name, owner_email, owner_password, owner_mobile) VALUES(?,?,?,?,?)",
    [owner_first_name, owner_last_name, owner_email, encryptedPassword, owner_mobile],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

//-------owner Profile Image Upload
router.post('/uploadprofileimage/:owner_id', upload.single('image'),(request, response) => {
  const owner_id  = request.params.owner_id
  const filename = request.file.filename

  console.log(request.file.filename)
  db.query(
    `update owner set owner_profileImage = ? where owner_id = ?`,
    [filename, owner_id],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
}
)

router.post("/ownerlogin", (request, response) => {
  const { owner_email, owner_password } = request.body
  const encryptedPassword = String(cryptoJs.SHA256(owner_password))
  const statement = "SELECT * FROM owner WHERE owner_email=? and owner_password=?"
  db.query(statement,[owner_email, encryptedPassword],(error,result)=>{
    if(!error && result.length > 0)
    {
      const owners = result[0]
        response.send(utils.createResult(null,{
            owner_id: owners['owner_id'],
            owner_first_name: owners['owner_first_name'],
            is_Valid: "true"
        }));
    }
    else{
        response.send({is_Valid : "false"});
    }
  })
})

router.get("/viewpg/:id",(request,response)=>{
  const id = request.params.id
  const statement=`SELECT * FROM pg WHERE owner_id=?`
  db.query(statement, [id],(error,result)=>{
    //db.query("")
      response.send(utils.createResult(error,result))
  })
})


router.post("/addpg", (request, response) => {
    const { pg_name, pg_type, pg_city, pg_isVacaent, pg_rent, pg_address, pg_foodType, owner_id, pg_rating} = request.body
    console.log(request.body)
    db.query(
      "INSERT INTO pg(pg_name, pg_type, pg_city, pg_isVacaent, pg_rent, pg_address, pg_foodType, owner_id) VALUES(?,?,?,?,?,?,?,?)",
      [pg_name, pg_type, pg_city, pg_isVacaent, pg_rent, pg_address, pg_foodType, owner_id, pg_rating],
      (error, result) => {
      response.send(utils.createResult(error, result))
      console.log(result)
    })
})

//-------upload PG Image api
router.post('/uploadPgImage/:pg_id', upload.single('image'),(request, response) => {
    const pg_id  = request.params.pg_id
    const filename = request.file.filename

    console.log(request.file.filename)
    db.query(
      `update pg set pg_Image = ? where pg_id = ?`,
      [filename, pg_id],
      (error, result) => {
        response.send(utils.createResult(error, result))
      }
    )
  }
)


router.put("/updatepg",(request,response)=>{
  const { owner_id, pg_id, pg_name, pg_type, pg_city, pg_isVacaent, pg_rent, pg_address, pg_foodType} = request.body
  console.log(request.body)
  const statement = "UPDATE pg set pg_name=? ,pg_type=?, pg_city=?, pg_isVacaent=?, pg_rent=?, pg_address=?, pg_foodType=? where owner_id = ? AND pg_id = ?"
  db.query(
    statement,
    [pg_name, pg_type, pg_city, pg_isVacaent, pg_rent, pg_address, pg_foodType, owner_id, pg_id],
    (error, result) => {
    response.send(utils.createResult(error, result))
  })
  console.log(statement)
})


router.post("/deletepg",(request,response)=>{
  const { pg_id , owner_id } = request.body
  console.log("Delete Request.body"+request.body.pg_id)
  const statement=`DELETE FROM pg WHERE pg_id=? AND owner_id=?`
  db.query(statement,[pg_id, owner_id],(error,result)=>{    
      response.send(utils.createResult(error,result))   
  })
})

//----------update profile api
router.put("/updateprofile",(request,response)=>{
  console.log(request.body)
  const { owner_first_name, owner_last_name, owner_email, owner_password, owner_mobile, owner_id} = request.body
  //const owner_id = request.params.id 
  console.log(request.body)
  const encryptedPassword = String(cryptoJs.SHA256(owner_password))
  db.query(
    "UPDATE owner set owner_first_name=?, owner_last_name=?, owner_email=?, owner_password=?, owner_mobile=? where owner_id = ?",
    [owner_first_name, owner_last_name, owner_email, encryptedPassword, owner_mobile, owner_id],
    (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//-------view bookings by pg
router.get("/viewBookings/:pg_id",(request,response)=>{
  const statement = "select b.pg_id, u.user_first_name, u.user_email, u.user_mobile, b.booking_id from pg p, users u, bookings b where u.user_id = b.user_id AND b.owner_id = p.owner_id group by booking_id having pg_id = ?" 
  const id = request.params.pg_id 
  db.query(statement,[id],(error,result)=>{
      response.send(utils.createResult(error,result))
  })
})

//--------get image api
router.get("/viewpgimage/:pg_id",(request,response)=>{
  const statement = "select pg_Image from pg where pg_id = ?"
  const id = request.params.pg_id 
  db.query(statement,[id],(error,result)=>{
      response.send(utils.createResult(error,result))
  })
})

//--------get pg by owner_id and pg_id
router.post("/viewpgbyownerpgid",(request,response)=>{
  const {pg_id, owner_id } = request.body
  console.log(request.body)
  const statement = "select * from pg where pg_id = ? and owner_id = ?"
  db.query(statement,[pg_id, owner_id],(error,result)=>{
      response.send(utils.createResult(error,result))
  })
})


module.exports = router