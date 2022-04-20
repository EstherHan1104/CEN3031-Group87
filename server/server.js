const express = require('express');
const cors = require('cors');
const mongo = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

// connect to mongo
const uri = 'mongodb+srv://smarty:pants@cluster0.c5hug.mongodb.net/Cluster0?retryWrites=true&w=majority';
mongo.connect(uri);
const connection = mongo.connection;
connection.once('open', () => {
    console.log("MongoDB connected...")
})

// set up routes
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const enrollRouter = require('./routes/enroll');
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/enroll', enrollRouter);

app.get('/', (req, res) => {
    res.send('Hello to SmartyPants API');
});

// listen to port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});