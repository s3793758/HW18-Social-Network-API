const mongoose = require('mongoose');

// connect to local database display if database is working or not
mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    console.log('connected to database succesfully');
  })
  .catch(() => {
    console.log('Error connecting to database');
  });
