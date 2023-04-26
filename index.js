const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
const insertInDb = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const ProductModel = mongoose.model("products", ProductSchema);

  const data = new ProductModel({
    name: "sports",
    price: 60000,
    brand: "tvs",
    category: "bike",
  });
  const result = await data.save();
  console.log(result);
};
insertInDb();

const updateInDb = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "sports" },
    { $set: { price: 61000 } }
  );
  console.log(data);
};
updateInDb();

const deleteInDb = async () => {
  const Product = mongoose.model("products", ProductSchema);

  let data = await Product.deleteOne({
    name: "heir",
  });
  console.log(data);
};
deleteInDb();

const findInDb = async () => {
  const Product = mongoose.model("products", ProductSchema);
  const data = await Product.find({ name: "maximum" });
  console.log(data);
};
findInDb();
