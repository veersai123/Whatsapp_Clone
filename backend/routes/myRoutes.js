const express=require("express")
const myRoute=express.Router()

myRoute.get('/',(req,res)=>{
    let frontendUrl=__dirname;
    frontendUrl=frontendUrl.slice(0,-15)
    res.sendFile(frontendUrl+'/frontend/index.html')
})

module.exports=myRoute