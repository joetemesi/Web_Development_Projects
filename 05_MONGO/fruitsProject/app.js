const mongoose = require("mongoose"); //import module

mongoose.connect("mongodb://localhost:27017/fruitsDB"); //create fruitsDB if not existing and connect to it

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
}); //define new schema

const Fruit = mongoose.model("Fruit", fruitSchema); //new fruits mongoDB collection

const fruit = new Fruit({
    name:"Banana",
    rating: 8,
    review: "Yummy"
}); //insert new entry to collection

fruit.save(); //save to fruits collection

