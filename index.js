const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json())
const port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log(`app is listening port ${port}`);
})

app.get("/:name",(req,res)=>{
    const {name} = req.params;
    res.status(200).send(`name: ${name}`)
})
app.get("/*",(req,res)=>{
    res.send(`404`)
})