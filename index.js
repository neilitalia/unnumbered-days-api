const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

dotenv.config();

// Database Connection
const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect( process.env.DB_CONNECT, connectOptions, () =>
  console.log('Connected to DB')
);

// Middleware
app.use(express.json());
// Routes Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(3000, () => console.log('Listening to port 3000'));