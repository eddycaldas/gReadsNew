const router = require("Express").Router()
const queries = require("../db/queries")

const table = "author"

router.post("/", (req, res) => {
  queries[table].create(req.body)
  .then((book) => res.json(book))
})


router.get("/:id", (req, res) => {
  var withBooks = req.query.withBooks
  var query = queries[table].read(req.params.id)
  if (withBooks) {
    query
      .join("author_book", "author_id", "author.id")
      .join("book", "book_id", "book.id")
  }
  query
  .then((book) => res.json(book))
})

router.put("/:id", (req, res) => {
  queries[table].update(req.params.id, req.body)
  .then((book) => res.send(200))
})

router.delete("/:id", (req, res) => {
  queries[table].delete(req.params.id)
  .then (() => res.send(202))
})

router.get("/", (req, res) => {
  queries[table].list()
    .then((data) => res.json(data))
})

module.exports = router