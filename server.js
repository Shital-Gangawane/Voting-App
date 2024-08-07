// models

const express =require ('express') //create server using this line
const app= express(); //create server using this line
// require('dotenv').config();  // dot env file

//port
const bodyParser=require('body-parser');
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000;

//
app.listen(PORT, ()=>{
    console.log('Listening on port 3000');
})