const express = require('express')
const cors = require('cors')
const bp = require('body-parser')
const mysql = require('mysql')
const PORT = 9000

const App = express()

App.use(cors({origin:'*'}))

App.use(bp.json())

const myCon = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"shoppingcart"
})

myCon.connect(err=>{

    if(err)
        console.log(err)
    else
        console.log("Connected to Mysql Server")

})

App.get("/api/getAllProducts",(req,resp)=>{

   
    myquery="select * from products"
    myCon.query(myquery,(err,result)=>{

        if(err)
            console.log(err)
        else
            resp.send(result)
    })



})

App.post('/getData',(req,resp)=>{

    let data = req.body
     console.log(data)
     resp.send("Received Data")

})

App.listen(PORT,err=>{
    if(err)
        console.log(err)
    else
        console.log("Server running at PORT"+PORT)
})

