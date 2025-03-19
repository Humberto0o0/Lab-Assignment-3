// app2.js - Display Cars JSON Data

// First, we import Express so we can create a simple web server
const express = require("express");

// We also import 'fs' (File System module) so we can read our JSON file
const fs = require("fs");

// Now, we create our Express application (this will handle our server)
const app = express();

// This route runs when someone visits "/cars"
// It will read the 'cars.json' file and return the data
app.get("/cars", (req, res) => {
    // We try to read the file that contains our car data
    fs.readFile("./data/cars.json", "utf8", (err, data) => {
        if (err) {
            // If there's a problem reading the file, we send an error message
            res.status(500).send("Error reading file");
        } else {
            // If everything works fine, we convert the file's text into JSON and send it as a response
            res.json(JSON.parse(data));
        }
    });
});

// Here, we start our server and tell it to listen on port 3000
app.listen(3000, () => {
    // Once the server is running, we print a message in the console
    console.log("Server running on http://localhost:3000/cars");
});
