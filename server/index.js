const express= require("express");
const app=express();
const mysql=require('mysql');
const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "employee_system"
});

app.post('/create',(req, res)=>{
    const name=req.body.name;
    const age=req.body.age;
    const country=req.body.country;
    const position=req.body.position;
    const wage=req.body.wage;
});

app.listen(3001, ()=>{
    console.log("Hey, your server is running on port 3001")
});