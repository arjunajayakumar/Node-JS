var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const products = [
    {
      name: "Macbook Pro",
      category: "Computer/laptop",
      description: "Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey",
      imageURL: "https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SX522_.jpg"
    },
    {
      name: "Portable chair",
      category: "Home/furniture",
      description: "AmazonBasics Zero Gravity Reclining Lounge Portable Chair, Black",
      imageURL: "https://images-na.ssl-images-amazon.com/images/I/A1Kl-V-RyHL._SX679_.jpg"
    },
    {
      name: "New Apple iPhone 11 (64GB) - White",
      category: "Mobile",
      description: "6.1-inch (15.5 cm) Liquid Retina HD LCD display",
      imageURL: "https://images-na.ssl-images-amazon.com/images/I/71QE00iB9IL._SX679_.jpg"
    },
    {
      name: "Esquire Plastic Centre Coffee Table",
      category: "Furniture",
      description: "Esquire Plastic Centre Coffee Table/Cosy Table/Tea Table/Teapoy- Big (Colour May Vary as per Stock Availability-Black/Brown)",
      imageURL: "https://images-na.ssl-images-amazon.com/images/I/71wjrHSWtYL._SX425_.jpg"
    },

  ]
  res.render('admin/viewProducts', { admin: true, products });
});

router.get('/addProduct', (req, res) => {
  res.render('admin/addProduct')
})

router.post('/addProduct', (req, res) => {
  console.log(req.body)
})

module.exports = router;
