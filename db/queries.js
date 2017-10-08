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
      return knex("book").where({id})
    },
    delete(id) {
      return knex("book").where({id}).delete()
    },
    list() {
      return knex("book")
    },
  },
  author: {
    update(id, body) {
      return knex("author").where({id}).update(body)
    },
    create (body) {
      return knex("author").insert(body)
    },
    read(id) {
      return knex("author").where({"author.id": id})
    },
    delete(id) {
      return knex("author").where({id}).delete()
    },
    list() {
      return knex("author")
    },
  }
}