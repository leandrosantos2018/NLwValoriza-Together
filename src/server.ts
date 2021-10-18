import "reflect-metadata";
import "./database";

import express, { request, response } from "express";

const app = express();



// http://localhost:3000
app.listen(3000,()=>{
    console.log("server is running ")
});