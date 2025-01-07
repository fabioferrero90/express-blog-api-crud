const express = require('express');
const app = express();
const postsRouter = require('./routers/posts.js');

const port = 3000;

app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`Sto ascoltando alla porta ${port}`)
})

app.get('/', (req, res) => {
  res.send('Il mio Blog')
})