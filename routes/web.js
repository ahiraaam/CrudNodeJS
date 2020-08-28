let router = require("express").Router();
let PagesController = require("../controllers/PagesController");
let ProductsController = require("../controllers/ProductsController");

router.get("/", PagesController.homepage);

router.get("/about-us", PagesController.about);

router.get("/products/create", ProductsController.create);

router.post("/products", ProductsController.storeProduct);

router.get("/products/:id", ProductsController.showProduct);

router.get("/products/:id/edit", ProductsController.editProduct);

router.put("/products/:id", ProductsController.updateProduct);

router.delete("/products/:id", ProductsController.deleteProduct);

module.exports = router;
