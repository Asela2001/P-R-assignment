import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import studentRoutes from './routes/studentRoutes.js'
import cors from 'cors';

const app = express()
dotenv.config();
connectDB(); // connect with mongoDB

//middleware
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:5173",
    })
);

const port = process.env.PORT || 5001;

//test the connection
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/student', studentRoutes);


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
