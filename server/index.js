const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = 5000;
app.use(cors());
app.use(express.json());
const dbo = require('./conn')
const ObjectId = require("mongodb").ObjectId;



app.get('/entry', (req,res) => {
    let dbConnect = dbo.getDb();
    dbConnect.collection("records").find({}).toArray((err,result) => {
        if(err) throw err;
        res.json(result);
    })
})

app.post('/entry/add',(req,res) => {
    let dbConnect = dbo.getDb();
    
    let entry = {id: req.body.id,
                 title: req.body.title,
                 text: req.body.text,
                 date: req.body.date}
    dbConnect.collection("records").insertOne(entry, (err, response) => {
        if (err) throw err;
        res.json(response);
    })
})

app.put('/entry/edit/:id', (req,res) => {
    let dbConnect = dbo.getDb();

    let myquery = { id: req.params.id };

    let newEntry = { $set: {
        title: req.body.title,
        text: req.body.text,
        date: req.body.date}}
    

    dbConnect.collection("records").updateOne(myquery,newEntry, (err,response)=>{
        if (err) throw err;
        res.json(response);
    })
})

app.listen(port, ()=>{
    console.log("Server Started")
    
    dbo.connectToServer((err) => {
        if (err) console.log(err)
    })
})