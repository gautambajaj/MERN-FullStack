const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// db config
const db = require('./config/keys').mongoURI;

// connect to mongo db with mongoose
mongoose
	.connect(db)
	.then(() => console.log('mongoDB connected'))
	.catch(err => console.log(err));


app.get('/', (req,res) => res.send('test again'));


// use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
