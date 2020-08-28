let ProductModel = require("../models/Product");
const ITEMS_PAGE = 5;
exports.homepage = (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let order = req.query.order;
  let campo = req.query.campo;
  ProductModel.count().then((data) => {
    let totalProducts = data[0]["count(*)"];
    let numPages = parseInt(totalProducts / 5 + 1);
    let currentPage = page;

    ProductModel.all(page, ITEMS_PAGE, order, campo).then((data) => {
      let products = data;
      res.render("pages/homepage", {
        products: products,
        numPages: numPages,
        currentPage: currentPage,
        hasNextPage: ITEMS_PAGE * page < totalProducts,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: numPages,
      });
    });
  });
};

exports.about = (req, res) => {
  res.render("pages/about-us");
};
