const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const app = express()
const bodyParser = require('body-parser')
const talk = require('./talk')
app.set('view engine','handlebars')
app.engine('handlebars',exphbs({defaultLayout:'main'}))

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/',(req, res)=>{
  res.render('index')
})

app.post('/',(req, res)=>{
  res.render('index', { trashTalk: talk(req.body.job)})
})

app.listen(port,()=>{
  console.log("let's talking shit")
})