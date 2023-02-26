const { request } = require("express");
const express = require("express");
const cors = require ('cors');
const app = express();
const PORT = 3010;


const seat = require("./seat.json");

app.use(cors())
app.get("/", (request, response)=>{
    response.send({response: true, code: 200, seat: seat})
} );

app.get("/:id", (request, response)=>{
const {id}= request.params;
const results = seat.filter(seat => seat.id === Number(id))
response.status(200).send({response: true, seat: results})
})

app.post("/create", (req, res)=>{
    
})

app.listen(PORT, ()=>{
console.log(`Server listening on port ${PORT}...`);
});