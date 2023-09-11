let express = require('express');
const path= require('path');
let app = express();

const publicPath= path.resolve(__dirname,'/public');
app.use(express.static(__dirname + '/public'));

app.listen(3000,()=> console.log('servidor corriendo') );

app.get('/', (req,res)=>{
    res.sendFile(path.resolve (__dirname,'./views/home.html'));
})

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve (__dirname,'./views/register.html'));
})

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve (__dirname,'./views/login.html'));
})