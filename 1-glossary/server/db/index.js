const mongoose = require('mongoose');

const mongoURI = `mongodb://0.0.0.0:27017/${process.env.DB_NAME}`;
// (`mongoldb://localhost/${process.env.DB_NAME}`);

// you can choose to not include the second param object stuff
// { useNewUrlParser: true, useUnifiedTopology: true  }
const db = mongoose.connect(mongoURI);

// err.stack summarizes the error message for you
db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err.stack);
  });


module.exports = db;