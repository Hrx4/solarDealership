const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require('body-parser')
const dotenv = require('dotenv');


const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

dotenv.config()

mongoose.set('strictQuery', true);

const connectDB = async() => {
  try {
      const conn = await mongoose.connect(process.env.MONGO_URI );
      console.log(`Mongo Connected ${conn.connection.host}`);

  } catch (error) {
      console.log(`Error : ${error.message}`);
      process.exit();
  }
};
connectDB()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, World! This is my Express server!');
});

app.use('/contacts' , require('./routes/contacsRoute'));
app.use('/getcontacts' , require('./routes/getContactsRoute'))
app.use('/apply' , require('./routes/apply'))
app.use('/getapply' , require('./routes/getApply'));
app.use('/login' , require('./routes/login'))



// Start the server
app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Server is running `);
});
