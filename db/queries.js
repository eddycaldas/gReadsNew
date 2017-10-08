const knex = require('./')

module.exports = {
  book: {
    update(id, body) {
      return knex("book").where({id}).update(body)
    },
    create (body) {
      return knex("book").insert(body)
    },
    read(id) {
      return knex("book").where({id}).first()
    },
    delete(id) {
      return knex("book").where({id}).delete()
    },
    list() {
      return knex("book")
    },
  }
}