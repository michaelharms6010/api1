const express = require('express'); // CommonJS module import

const server = express();

server.use(express.json()); // teaches express to read JSON
// request handlers

server.get( "/", (req, res) => {
    res.send("Hello Node 23!")

})

server.post("/echo", (req,res) => {
   res.status(201).json(req.body);

});

server.delete("/hubs/:id", (req, res) =>{
    const id = req.params.id;
})


const port = 8000;

server.listen(port, _ => console.log("\n API on port 8000 \n"));
