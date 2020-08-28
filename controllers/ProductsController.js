let ProductModel = require("../models/Product");
exports.create = (req, res) => {
  res.render("products/create.hbs");
};

exports.storeProduct = (req, res) => {
  let product = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  };
  ProductModel.create(product).then((id) => {
    res.redirect("/");
  });
};

exports.showProduct = (req, res) => {
  let id = req.params.id;
  ProductModel.findProduct(id).then((product) => {
    if (product == null) {
      res.status(404).send("Not found");
      return;
    }
    res.render("products/single-product", { product: product });
  });
};

exports.editProduct = (req, res) => {
  let id = req.params.id;
  ProductModel.findProduct(id).then((product) => {
    if (product == null) {
      res.status(404).send("Not found");
      return;
    }
    res.render("products/edit-product", { product: product });
  });
};

exports.updateProduct = (req, res) => {
  let id = req.params.id;
  ProductModel.findProduct(id).then((product) => {
    if (product == null) {
      res.status(404).send("Not found");
      return;
    }

    let updatedProduct = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };

    ProductModel.update(product.id, updatedProduct).then((id) => {
      res.redirect("/");
    });
  });
};

exports.deleteProduct = (req, res) => {
  let id = req.params.id;

  ProductModel.findProduct(id).then((product) => {
    if (product == null) {
      res.status(404).send("Not found");
      return;
    }

    ProductModel.delete(product.id).then((id) => {
      res.redirect("/");
    });
  });
};
