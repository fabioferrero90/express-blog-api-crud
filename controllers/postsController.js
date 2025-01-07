const posts = require('../data/posts');

const index = (req, res) => {
  res.json(posts)
}

const show = (req, res) => {
  const post = posts[req.params.id]
  console.log(post);
  res.json(post)
}

const store = (req, res) => {
  res.send('Nuovo post')
}

const update = (req, res) => {
  res.send(`Modifico il post con id ${req.params.id} `)
}

const modify = (req, res) => {
  res.send(`Modifico parzialmente il post con id ${req.params.id}`)

}

const destroy = (req, res) => {
  res.send(`Cancellazione del post con id ${req.params.id}`)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}