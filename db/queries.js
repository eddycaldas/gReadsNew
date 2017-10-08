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
  },
  author: {
    update(id, body) {
      return knex("author").where({id}).update(body)
    },
    create (body) {
      return knex("author").insert(body)
    },
    read(id) {
      return knex("author").where({"author.id": id}).first()
    },
    delete(id) {
      return knex("author").where({id}).delete()
    },
    list() {
      return knex("author")
    },
  },
  author_book: {
    getBooksForAuthor(author_id) {
      return knex("author_book").where({author_id}).select("book_id")
        .then((books) => {
          return Promise.all(
            books.map((book) => knex("book").where({id:book.book_id}).first()
          ))
        })
    },
    getAuthorsForBook(book_id) {
      return knex("author_book").where({book_id}).select("author_id")
        .then((authors) => {
          return Promise.all(
            authors.map((author) => knex("author").where({id:author.author_id}).first()
          ))
        })
    },
  }
}