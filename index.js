// import { getTotalGoals } from './Test/test'
const express = require('express')
// Create the express app
const app = express()
const mongoose = require('mongoose')


// IMPORT LOCAL PACKAGES
const config = require('./config');
const authenticate = require('./authenticate');

// IMPORT ROUTERS
const AuthRouter = require('./Routes/Auth/AuthRouter');

// INIT MONGO DB
const mongodburl = config.MONGODB_URL;
mongoose.connect(mongodburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(console.log(`Connected to MongoDB`))
.catch(error => {
  console.log(error);
});


// Routes and middleware

app.use('/auth', AuthRouter);
// app.use(/* ... */)
// app.get(/* ... */)

// Error handlers
app.use(function fourOhFourHandler (req, res) {
  res.status(404).send()
})
app.use(function fiveHundredHandler (err, req, res, next) {
  console.error(err)
  res.status(500).send()
})



// Start server
app.listen(config.PORT, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log(`Started at http://localhost:${config.PORT}`)
})

