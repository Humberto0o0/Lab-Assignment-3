// app3.js - CRUD API for Cars

const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json()); // Enable JSON body parsing

const FILE_PATH = "./data/cars.json"; // Path to the cars data file

// Read car data from file
const readCars = () => JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));

// Write updated car data to file
const writeCars = (cars) => fs.writeFileSync(FILE_PATH, JSON.stringify(cars, null, 2));

//  GET - Fetch all cars
app.get("/cars", (req, res) => {
    res.json(readCars());
});

//  POST - Add a new car
app.post("/cars", (req, res) => {
    let cars = readCars();
    const newCar = { id: cars.length + 1, ...req.body };
    cars.push(newCar);
    writeCars(cars);
    res.status(201).json(newCar);
});

//  PUT - Update a car by ID
app.put("/cars/:id", (req, res) => {
    let cars = readCars();
    const index = cars.findIndex(car => car.id == req.params.id);
    if (index === -1) return res.status(404).send("Car not found");
    cars[index] = { ...cars[index], ...req.body };
    writeCars(cars);
    res.json(cars[index]);
});

//  DELETE - Remove a car by ID
app.delete("/cars/:id", (req, res) => {
    let cars = readCars().filter(car => car.id != req.params.id);
    writeCars(cars);
    res.send("Car deleted");
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("🚀 CRUD API running at http://localhost:3000/cars");
});
