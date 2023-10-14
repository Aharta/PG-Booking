const express=require("express")
const cors=require("cors")
const routerAdmin=require("./router/admin")
const routerOwner=require("./router/owner")
const routerUser=require("./router/user")

const app=express()
app.use(express.json())
app.use(cors("*"))
app.use(express.static('uploads'))

app.use("/admin",routerAdmin)
app.use("/owner",routerOwner)
app.use("/user",routerUser)

app.listen(5000,"0.0.0.0",()=>{
    console.log("server started at port 5000")
})


