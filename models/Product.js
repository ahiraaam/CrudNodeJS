const knex = require("../database/connection");

exports.count = async () => {
  var totalCount = await knex.table("products").count();
  return totalCount;
};

exports.all = (page, items_per_page) => {
  if (page < 1) page = 1;
  var offset = (page - 1) * items_per_page;

  return knex.select("*").from("products").offset(offset).limit(items_per_page);
};

exports.findProduct = (id) => {
  return knex.select("*").from("products").where("id", id).first();
};

exports.create = (product) => {
  return knex("products").insert({
    name: product.name,
    price: product.price,
    description: product.description,
  });
};

exports.update = (id, product) => {
  return knex("products")
    .update(product)
    .update("updated_at", knex.fn.now())
    .where("id", id);
};

exports.delete = (id) => {
  return knex("products").delete().where("id", id);
};
