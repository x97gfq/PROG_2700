const Express = require("express");
const cors = require('cors')
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb://127.0.0.1:27017";
const DATABASE_NAME = "contacts_db";
const COLLECTION_NAME = "contacts";

var app = Express();
const http = require('http').createServer(app);

app.use(cors());
app.use(BodyParser.json({limit: '1mb'}));
app.use(BodyParser.urlencoded({limit: '1mb', extended: true}));

var database, collection;

app.get('/api/contacts', (req, res) => {
  collection.find({}).toArray((error, result) => {
      if(error) {
          return res.status(500).send(error);
      }
      res.send(result);
  });
})

app.get('/api/contacts/:id', (request, res) => {
  var id = new ObjectId(request.params.id);

  collection.findOne({ "_id": id }, (error, result) => {
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
      res.send(req.body);
  });
})

app.put('/api/contacts/:id', (req, res) => {
  var id = new ObjectId(req.params.id);

  var myquery = { "_id": id };
  var newvalues = { $set: req.body };
  collection.updateOne(myquery, newvalues, function(error, result) {
      if(error) {
          return res.status(500).send(error);
      }
      res.send(req.body);
  });
})

app.delete('/api/contacts/:id', (req, res) => {
  var id = new ObjectId(req.params.id);

  var myquery = { "_id": id };
  collection.deleteOne(myquery, function(error, result) {
      if(error) {
          return res.status(500).send(error);
      }
      res.send(req.body);
  });
})

http.listen(5000, () => {
  MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection(COLLECTION_NAME);

    console.log("Running on port 5000 - connected to `" + DATABASE_NAME + "`");
  });
});

//get test page
app.get("/", (request, response) => {
    response.json({"message":"unknown request"});
});

