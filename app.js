// const authorAPI = 'https://arcane-badlands-99893.herokuapp.com/author';
// const bookAPI = 'https://arcane-badlands-99893.herokuapp.com/author';

const express = require('Express');
const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

const routes = {
  book: require("./routes/book"),
  author: require("./routes/author"),
}

app.use("/book", routes.book)
app.use("/author", routes.author)

app.listen(PORT, () =>
console.log(`listeninig on ${PORT}`));