exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {
          id: 1,
          name: "Balon de Futbol",
          description: "Un buen equipo",
          price: 222,
        },
        {
          id: 2,
          name: "Balon de Futbol 2",
          description: "Un buen equipo",
          price: 222,
        },
        {
          id: 3,
          name: "Balon de Futbol 3",
          description: "Un buen equipo",
          price: 222,
        },
      ]);
    });
};
