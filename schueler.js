const mongo = require('mongodb')
const express = require('express')
require('ejs')

const app = express()
const MongoClient = mongo.MongoClient

app.get('/', (req, res)=>{
    db.collection('schueler').find().toArray((err,data)=>{
        res.render('index.ejs', {schueler: data})
    })
})

MongoClient.connect('mongodb://5ahit:5ahit5ahit@ds125472.mlab.com:25472/5ahit_1819', (err, client)=>{
    db = client.db('5ahit_1819')
    if(err){
        console.log(err)
        return
    }
    console.log('test')
    app.listen(8000,(err,)=>{

    })
})