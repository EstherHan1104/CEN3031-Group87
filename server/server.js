const express = require('express');
const cors = require('cors');
const mongo = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongo.connect(uri);
const connection = mongo.connection;
connection.once('open', () => {
    console.log("MongoDB connected...")
})

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});