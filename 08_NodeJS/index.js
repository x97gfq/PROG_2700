const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.get('/api/contacts', (req, res) => {
    console.log("GET",req.params);
    res.send({"message":"got your GET reuqest"});
})

app.get('/api/contacts/:id', (req, res) => {
    console.log("GET w/IO",req.params);
    res.send({"message":"got your GET request w/ID param"});
})

app.post('/api/contacts', (req, res) => {
    console.log("POST",req.body);
    res.send({"message":"got your POST request"});
})

app.put('/api/contacts/:id', (req, res) => {
    console.log("PUT",req.body);
    res.send({"message":"got your PUT request"});
})

app.delete('/api/contacts/:id', (req, res) => {
    console.log("DELETE",req.params);
    res.send({"message":"got your DELETE request"});
})

app.listen(5000, () => {
    console.log('Listening on localhost:5000, try hitting the GET request at http://localhost:5000/api/contacts');
});
