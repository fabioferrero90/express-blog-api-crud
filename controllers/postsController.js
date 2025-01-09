const posts = require('../data/posts');

const index = (req, res) => {
  let postList = posts
  if (req.query.tags) {
    postList = posts.filter(post => post.tags.includes(req.query.tags))
  }
  res.json(postList)
}

const show = (req, res) => {
  let postToShow = req.params.id ? posts.find(post => post.id == req.params.id) : false
  if (!postToShow) {
    return res.status(404).json({
      message: "Post non trovato",
      status: 404,
      error: 'Not Found'
    })
  }
  res.json(postToShow)
}

const store = (req, res) => {
  const id = posts.at(-1).id + 1;
  const newPost = {
    id,
    ...req.body
  }
  posts.push(newPost)
  res.status(201).send('Nuovo post aggiunto con id ' + id);
  console.log(posts);
}

const update = (req, res) => {
  const id = parseInt(req.params.id);
  let postToUpdate = posts.find(post => post.id === id);
  if (!postToUpdate) {
    return res.status(404).json({
      message: 'Post non trovato',
      status: 404,
      error: 'Not Found'
    })
  }

  for (let key in req.body) {
    postToUpdate[key] = req.body[key]
  }

  res.status(201);
  res.send(`Modificato il post con id ${req.params.id} `)
  console.log(posts);
}

const modify = (req, res) => {
  res.send(`Modifico parzialmente il post con id ${req.params.id}`)

}

const destroy = (req, res) => {
  const postToDelete = posts.find(post => post.id == req.params.id);
  if (!postToDelete) {
    return res.status(404).json({
      message: "Post non trovato",
      status: 404,
      error: 'Not Found'
    })
  }
  posts.splice(posts.indexOf(postToDelete), 1)
  console.log(posts)
  res.sendStatus(204)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}