const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;

var dbname = "firstdb"

var client = new mongoClient( 'mongodb+srv://sachin12:sachin12@sachin12-c8ifq.mongodb.net/firstdb?retryWrites=true&w=majority' , {useNewUrlParser: true, useUnifiedTopology: true })
var connection;
// for connecting database
client.connect((err,db)=>{
    if(!err){
        connection = db;
        console.log("database is connected successfully");
    }
    else{
        console.log("database is not connected"+err);
    }
})


var app = express();
app.use(cors());
app.get('/',(req,res)=>{
    res.send({status: "ok",data:"test api"})

})

// for posting sign-up details in database
app.post('/signUp',bodyparser.json(),(req,res)=>{
    var collection = connection.db("firstdb").collection("users");
    collection.find({email: req.body.email}).toArray((err,docs)=>{
        if(!err && docs.length > 0){
            res.send({status:"failed",data:"email already exits"})
        }
        else{
            collection.insertOne(req.body,(err,result)=>{
                if(!err){
                    res.send({status:"ok",data:"signUp success"})
                }
                else{
                    res.send({status:"failed",data:err});
                }
            })
        }
    })
})


// for login 

app.post('/login',bodyparser.json(),(req,res)=>{
    var collection = connection.db("firstdb").collection("users");
    collection.find({email:req.body.email}).toArray((err,docs)=>{
        if(!err && docs.length > 0){
            res.send({status:"ok",data:docs})
        }
        else{
            res.send({status:"failed",data:err})
        }
    })
})


app.listen(3000,()=>console.log("server is listening on port 3000"))
// app.post('/login',(req,res)=>{
    
//     console.log(req.body);
//     res.status(200).send({"message":"data received"});
// })

// app.post('/signUp',(req,res)=>{
//     console.log(req.body);
//     res.status(200).send({"message":"signUP data received"});
// })