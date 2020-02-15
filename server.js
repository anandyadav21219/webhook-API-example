const express = require("express")
const bodyParser = require('body-parser')
const app=express()

const MongoClient =require("./database/conn")
const WebHookModel = require("./database/WebHook.model")


MongoClient().then(()=>{
    console.log("Connected");
})
.catch(console.log)


app.use(bodyParser.urlencoded({ extended: false }))// how to behave with requset 
app.use(bodyParser.json()) //

app.get("/", (req, res)=> {
    res.send("welcome to hands on demo of WebHook")
})

app.get("/api/webhook/",function(req,res){

    WebHookModel
    .find().then((wh)=>{
        res.json({
            flag:true,
            data:wh,
            message:"Succes fetched"
        });
    })
.catch(e=>{
    res.json({
        flag:false,
        data:null,
        message:e.message
    });
})
})

app.post("/api/webhook/",function(req,res){

let body=req.body;

    WebHookModel
    .create(body)
    .then((wh)=>{
        res.json({
            flag:true,
            data:wh,
            message:"Post succes fetched"
        })
    })
    .catch(e=> {
        res.json({
            flag: false,
            data: null,
            message: e.message
        });
    })
})


app.listen(4000)

