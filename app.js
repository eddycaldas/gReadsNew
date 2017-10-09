const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const routes = {
  book: require("./routes/book"),
  author: require("./routes/author"),
}

app.use(express.static('public'))
app.use("/book", routes.book)
app.use("/author", routes.author)

app.listen(PORT, () =>
console.log(`listeninig on ${PORT}`));
console.log('test');