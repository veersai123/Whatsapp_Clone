const myRoute = require("./routes/myRoutes")

const express=require("express")
const app=express()

const env=require("dotenv").config()

app.use(express.static('frontend'))
app.use(myRoute)
let port=process.env.PORT|| 5000
app.listen(port,()=>{
console.log("server is running on ", port)
})