//// Importing express
const express = require('express');
require("./connection");
var JobModel = require("./model/job");
const UserModel = require('./model/user');
var cors = require('cors');
const bcrypt = require('bcryptjs');

// Initialize express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
// Root endpoint
app.get('/', (req, res) => {  
    res.send('Welcome to the Job Application Backend');
});

// Test endpoint
app.get('/trial', (req, res) => {
    res.send('This is a trial message for Job App');
});

//sign up 
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save the user with the hashed password
        const newUser = new UserModel({ name, email, password: hashedPassword });
        await newUser.save();
        res.send({ message: "User registered successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Failed to register user" });
    }
});

//login
// const bcrypt = require('bcryptjs'); // Add bcrypt for password comparison

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user in the database
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).send({ message: 'User not found!' });
        }

        // Compare password with hashed password stored in database
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).send({ message: 'Incorrect password!' });
        }

        res.send({ message: 'Login successful!' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Failed to login' });
    }
});

// Add a new job
app.post("/add", async (req, res) => {
    try {
        await JobModel(req.body).save();
        res.send({ message: "Job added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Failed to add job" });
    }
});

// View all jobs
app.get("/view", async (req, res) => {
    try {
        var data = await JobModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Failed to retrieve jobs" });
    }      
});

// Delete a job by ID
app.delete("/remove/:id", async (req, res) => {
    try {
        await JobModel.findByIdAndDelete(req.params.id)
        res.send({ message: "Job deleted successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Failed to delete job" })
    }
})



// Update a job by ID
app.put("/update/:id", async (req, res) => {
    try {
        await JobModel.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: "Job updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Failed to update job" });
    }
});

// Port Setting
app.listen(3005, () => {
    console.log('Server is running on port 3005');
});