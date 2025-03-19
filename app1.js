// app1.js - Express Home Route (Group Names)

const express = require("express");
const app = express();

// Home route to display group names
app.get("/", (req, res) => {
    res.send("<h1>Group Members: Humberto Nava Ramirez, Luis Samuel Enrique Concha Sepulveda</h1>");
});

// Start server on port 3000
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
