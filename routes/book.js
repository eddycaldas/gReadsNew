const router = require("Express").Router()
const queries = require("../db/queries")

router.put("/:id", (req, res) => {
  queries.book.update(req.params.id, req.body)
  .then((book) => res.send(200))
})

router.post("/", (req, res) => {
  queries.book.create(req.body)
  .then((book) => res.json(book))
})

router.get("/:id", (req, res) => {
  queries.book.read(req.params.id)
  .then((book) => res.json(book))
})

router.delete("/:id", (req, res) => {
  queries.book.delete(req.params.id)
  .then (() => res.send(202))
})

router.get("/", (req, res) => {
  queries.book.list()
    .then((data) => res.json(data))
})

module.exports = router