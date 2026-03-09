const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const server =express();


server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(cors());
server.get('/',(request,response)=>{
response.send('server is working fine')
})

server.listen(4000,()=>{
mongoose.connect('mongodb://127.0.0.1:27017/job-portal') //url of database,here mongoose_376 is database name this is choice give any name
  .then(() => console.log('Connected!'))
  .catch((error)=>{
    console.log('database conneectivity error');
  });
})