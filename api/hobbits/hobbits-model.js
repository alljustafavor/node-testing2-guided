const db = require('../../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
}

function getAll() {
  return db("hobbits");
}

function getById(id) {
  return db("hobbits")
    .where("id", id)
    .first();
}

async function insert(hobbit) {
  return await db("hobbits")
    .insert(hobbit)
    .then(([id]) => {
      return db("hobbits")
        .where("id", id)
        .first();
    });
}

async function update(id, changes) {
  return await db("hobbits")
    .where("id", id)
    .update(changes)
}

async function remove(id) {
  const beforeDeletion = await getById(id);
  const res = await db("hobbits").where("id", id).del();
  return beforeDeletion
}
