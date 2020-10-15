// import { getTotalGoals } from './Test/test'
const express = require('express')
const getTotalGoals = require('./Test/test')
// Create the express app
const app = express()

// Routes and middleware
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
app.listen(1234, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log('Started at http://localhost:1234')
})

// TESTING ZONE


const fun = async () => {
  console.log("start");

	var ans = await getTotalGoals("barcelona", 2011);
  await console.log("Final Output : "+ ans);
  
  console.log("end")
}
fun();