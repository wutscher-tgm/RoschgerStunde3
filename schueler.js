const mongo = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')

require('ejs')

const app = express()
const MongoClient = mongo.MongoClient

app.use(bodyParser.urlencoded())

app.get('/', (req, res)=>{
    db.collection('schueler').find().toArray((err,data)=>{
        res.render('index.ejs', {schueler: data})
    })
})

app.post('/new', (req, res)=>{
    let schueler = req.body
    db.collection('schueler').save(schueler, (err, data)=>{
        if(err){
            res.send(err)
        }else{
            console.log(data)
            res.redirect('/')
        }
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