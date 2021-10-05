const express= require("express");
const app=express();
const mysql=require('mysql');
const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "employee_system"
})

app.listen(3001, ()=>{
    console.log("Hey, your server is running on port 3001")
});