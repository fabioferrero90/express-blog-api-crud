const express = require('express');
const app = express();
const postsRouter = require('./routers/posts.js');
const errorsHandler = require('./middlewares/errorshandler');
const notFound = require('./middlewares/notFound');

const port = 3000;

app.use(express.json());

app.use('/posts', postsRouter);

app.use(errorsHandler);

app.use(notFound);


app.listen(port, () => {
  console.log(`Sto ascoltando alla porta ${port}`);
})

app.get('/', (req, res) => {
  res.send('Il mio Blog');
})