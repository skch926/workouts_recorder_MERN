require('dotenv').config();

const express = require("express"); // CommonJS
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')



// express app
const app = express();



//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next()
})



//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)




//  route
app.get("/", (req, res) => {
  res.json({ mssg: "Hello MERN Stack app " });
});




//connect to db
mongoose.connect(process.env.MONG_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log(`listening on port`, process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
//listen for requests
// const port=process.env.PORT
// app.listen(port, () => {
//   console.log(`Server is running on localhost:`,process.env.PORT);
// })



