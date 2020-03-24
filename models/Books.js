const { model, Schema } = require('mongoose')

module.exports = model('books', new Schema({
  title: String,
  author: String,
  description: String,
  image: String,
  link: String
}))
