const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

dotenv.config();

const timestamp = () => {
  return new Date().toJSON()+' ';
}

// Database Connection
const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect( process.env.DB_CONNECT, connectOptions, () =>
  console.log(timestamp()+'Connected to DB')
);

// Middleware
app.use(cors());
app.use(express.json());
// Routes Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(process.env.API_PORT, () => console.log(timestamp() + 'Server Up'));