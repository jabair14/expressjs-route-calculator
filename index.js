const express = require("express");
// import * as express from "express";
const app = express();
const port = "3400";

app.get("/", (request, response) => {
    response.send("my server has started");
})

app.get("/bird", (request, response) => {
    response.send("this is the bird route");
})

//addition
app.get("/:number1/:number2/sum", (request, response) => {
    const number1 = request.params['number1']
    const number2 = request.params['number2']
    
    const sum = parseInt(number1) + parseInt(number2);
    

    console.log(sum)
    
    response.send("this route equals " + "<br>" +sum);
})

//subtraction

app.get("/:number1/:number2/subtract", (request, response) => {
    const number1 = request.params['number1']
    const number2 = request.params['number2']
    
    const subtract = parseInt(number1) - parseInt(number2);
    

    console.log(subtract)
    
    response.send("these routes equal " +subtract);
})

//multiply

app.get("/:number1/:number2/multiply", (request, response) => {
    const number1 = request.params['number1']
    const number2 = request.params['number2']
    
    const multiply = parseInt(number1) * parseInt(number2);
    

    console.log(multiply)
    
    response.send("these routes multiplied are " +multiply);
})

//divided

app.get("/:number1/:number2/divided", (request, response) => {
    const number1 = request.params['number1']
    const number2 = request.params['number2']
    
    const divide = parseInt(number1) / parseInt(number2);
    

    console.log(divide)
    
    response.send("these routes multiplied are " +divide);
})



app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})

