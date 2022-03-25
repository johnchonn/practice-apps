require("dotenv").config();
const express = require("express");
const path = require("path");

const db = require('./db/index.js');
const bodyParser = require('body-parser');
const { getAll, add } = require('./db/controllers/index');
const morgan = require('morgan');


// Serves up all static and generated assets in ../client/dist.
const app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "../client/dist")));
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.get('/words', getAll);
app.post('/words', add);


//  app.get(`/words`, ((req, res) => {
//    console.log('inside get of server');
//    db
//     .read()
//     .then(result => {
//       res.status(200).send(result)
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     });
//   }
// ));


// app.post(`/words`, ((req, res) => {
//   db.create(req.query, ((err, result) => {
//     if (err) {
//       res.status(404).send('failed');
//     } else {
//       res.status(201).send('success');
//     }
//   }));
// }));

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);