const express=require('express');
const connectdb=require('./config.js/database');
const router=require('./router/router');
const app=express();
const cors=require("cors");

const corsOptions={
    origin:"https://task-30-lovat.vercel.app",
    methods:"GET,POST,PATCH,PUT,DELETE",
    credentials:true
}
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api',router);
connectdb();
app.listen(8000,()=>{console.log('server has been connected.')});