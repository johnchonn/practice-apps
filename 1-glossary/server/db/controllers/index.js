const db = require('../models/index.js');


// controller is the methods we use to manipulate or control models to change the views
// get and search are always req.query
// post is always req.body

exports.getAll = (req, res) => {
  console.log('this is the getAll', req.query);
  db
    .find()
    .sort({ createdAt: -1 })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
}

exports.add = (req, res) => {
  // console.log('this is exports.add', req.body);
  const newDb = new db(req.body);
  newDb
    .save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.remove = (req, res) => {
  const id = req.params.id;
  Attendee
    .findByIdAndDelete(id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};


// exports.findRsvp = (req, res) => {
//   const id = req.params.id;
//   Rsvp
//     .findById(id)
//     .then(result => {
//       res.status(200).send(result);
//     })
//     .catch(err => {
//       res.status(400).send(err);
//     });
// }

// exports.rsvpUpdate = (req, res) => {
//   const newRsvp = new Rsvp(req.body);
//   newRsvp
//     .save()
//     .then(result => res.status(200).send(result))
//     .catch(err => res.status(400).send(err))
// }

// exports.findRsvpAndUpdate = (req, res) => {
//   Rsvp
//     .find()
//     .sort({ createdAt: -1 })
//     .then(result => res.status(200).send(result))
//     .catch(err => console.log(err));
// };