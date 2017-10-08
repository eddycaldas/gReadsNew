// const authorAPI = 'https://arcane-badlands-99893.herokuapp.com/author';
// const bookAPI = 'https://arcane-badlands-99893.herokuapp.com/author';

const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

const routes = {
  book: require("./routes/book")
}

app.use("/book", routes.book)

app.listen(PORT, () =>
console.log(`listeninig on ${PORT}`));