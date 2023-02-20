const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "";
const DATABASE_NAME = "";

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var database, collection;

app.get('/api/contacts', (req, res) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
})

app.get('/api/contacts/:id', (req, res) => {
    var id = new ObjectId(request.params.id);

    collection.findOne({ "id": id }, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });   
})

app.post('/api/contacts', (req, res) => {
    collection.insert(req.body, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result.result);
    });
})

app.put('/api/contacts/:id', (req, res) => {
    var id = new ObjectId(request.params.id);

    var myquery = { "id": id };
    var newvalues = { $set: req.body };
    collection.updateOne(myquery, newvalues, function(error, result) {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result.result);
    });
})

app.delete('/api/contacts/:id', (req, res) => {
    var id = new ObjectId(request.params.id);

    var myquery = { "id": id };
    collection.deleteOne(myquery, function(error, result) {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result.result);
    });
})


app.listen(5000, () => {
    console.log("Connecting to database...")
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("contacts");
        console.log("Connected to `" + DATABASE_NAME + "`!");
        console.log('Listening on localhost:5000, try http://localhost:5000/api/contacts');
    }).then(dbc => {
        console.log('SUCCESS');
    }).catch(err => {
        console.log('EXITING');
    });;
});

