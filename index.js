const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connected to DB successfully"))
.catch((err) => console.log(err));

// for parsing application json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

app.use('/api/user',userRoutes);
app.use('/api/user',authRoutes);

app.listen(process.env.PORT || 5000,() => {
    console.log(`Server is listening to poort 5000`);
});