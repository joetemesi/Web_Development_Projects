const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");


const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "sawaaa"
},
{
   name: "banana",
   rating: 9,
   review: "poa"
}
);

fruit.save()
  .then(() => {
     console.log("Successfully saved the fruit to the database.");

     // Find and display all entries in the 'fruits' collection
     return Fruit.find().exec();
  })
  .then((fruits) => {
     console.log("All fruits in the collection:", fruits);
  })
  .catch((err) => {
     console.error("Error saving or finding fruits:", err);
  });

