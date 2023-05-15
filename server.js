var express = require('express');
var bodyParser = require('body-parser');
var app = express()// set reference to variable called app from an instance of express

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://myuser:mypassword@localhost:32000/?authMechanism=DEFAULT';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  // Use client to interact with database
});



app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


var comments = []

app.get('/', (req,res)=> {
    res.sendFile('./index.html', { root: __dirname });
})

app.post('/', (req,res)=> {
    const obj = Object.assign({},req.body);
    console.log(req.body)
    comments.push(req.body)
    res.sendStatus(200)
})


var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})


