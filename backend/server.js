const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require('body-parser')
const dotenv = require('dotenv');


const app = express();
const port = 5000; 
app.use(cors())
// app.use(bodyParser.urlencoded())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

dotenv.config()
// Connect to MongoDB using Mongoose
//  async () =>  try{
//     const conn = await mongoose.connect(process.env.MONGO_URI );
//         console.log(`Mongo Connected ${conn.connection.host}`.cyan.underline.bold);
//   })
//   catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   })}
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
app.use('/getapply' , require('./routes/getApply'))



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
