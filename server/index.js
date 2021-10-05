const express= require("express");
const app=express();
const mysql=require('mysql');

app.listen(3001, ()=>{
    console.log("Hey, your server is running on port 3001")
});