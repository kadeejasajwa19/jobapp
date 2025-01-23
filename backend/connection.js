const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://rjp:rahma@cluster0.mfydx.mongodb.net/jobapp?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.log(err)
    })