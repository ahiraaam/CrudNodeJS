const knex = require("../database/connection");

exports.count = async () => {
  var totalCount = await knex.table("products").count();
  return totalCount;
};

exports.all = (page, items_per_page, order, campo) => {
  if (page < 1) page = 1;
  let offset = (page - 1) * items_per_page;
  order = order || "ASC";
  campo = campo || "id";

  return knex
    .select("*")
    .from("products")
    .orderBy(campo, order)
    .offset(offset)
    .limit(items_per_page);
};

exports.orderProducts = (order, campo) => {
  return knex("*").from("products").orderBy(campo, order);
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
