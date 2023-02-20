const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

var contacts =[ 
    { "id":1, "name":"Fred Flintstone", "email":"fred@bedrock.ca"},
    { "id":2, "name":"Wilma Flintstone", "email":"wilma@bedrock.ca"},
    { "id":3, "name":"Barney Rubble", "email":"Barney@bedrock.ca"},
    { "id":4, "name":"Wilma Rubble", "email":"fred@bedrock.ca"}
];

app.get('/api/contacts', (req, res) => {
    console.log("GET",req.params);

    //send all data back
    res.json(contacts);
})

app.get('/api/contacts/:id', (req, res) => {
    console.log("GET w/IO",req.params);

    //send the specific record back
    const item = contacts.find(itm => itm.id == req.params.id);
    res.json(item);
})

app.post('/api/contacts', (req, res) => {
    console.log("POST",req.body);

    //add the new record to the array
    contacts.push(req.body);

    //response is usually the added record
    res.send(req.body);
})

app.put('/api/contacts/:id', (req, res) => {
    console.log("PUT",req.body);

    //update the specific record in the array
    contacts.forEach(item => {
        if (item.id == req.params.id) {
            item.name = req.body.name;
            item.email = req.body.email;
        }
    });    

    //response is usually the updated record
    res.send(req.body);
})

app.delete('/api/contacts/:id', (req, res) => {
    console.log("DELETE", req.params)

    //find the index of the request item, and remove it.
    const index = contacts.indexOf(req.body);
    const x = contacts.splice(index, 1);

    //response is usually an empty record
    res.send({});
})

app.listen(5000, () => {
    console.log('Listening on localhost:5000, try hitting the GET request at http://localhost:5000/api/contacts');
});
