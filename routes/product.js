const router = require("express").Router();

const Product = require("../models/Product.js");

//create
router.post("/create/new", async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get product
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCatagor = req.query.categories;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCatagor) {
      products = await Product.find({
        categories: {
          $in: [qCatagor],
        },
      });
    } else {
      products = Product.find();
    }
    req.status(200).json(products);
  } catch (error) {
    req.status(500).json(error);
  }
});

module.exports = router;
