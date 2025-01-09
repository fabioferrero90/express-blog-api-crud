const validatePost = (req, res, next) => {
  const { title, content, image, tags } = req.body;

  if (!title || !content || !image || !tags) {
    return res.status(400).json({ error: 'Dati mancanti' });
  }

  if (typeof title !== 'string' || typeof content !== 'string' || typeof image !== 'string') {
    return res.status(400).json({ error: 'title, content e image devono essere stringhe' });
  }

  if (!Array.isArray(tags)) {
    return res.status(400).json({ error: 'tags deve essere un array' });
  }

  for (const tag of tags) {
    if (typeof tag !== 'string') {
      return res.status(400).json({ error: 'Ogni tag deve essere una stringa' });
    }
  }

  next();
};

const validateUpdate = (req, res, next) => {
  const { id, title, content, image, tags } = req.body;

  if (!id && !title && !content && !image && !tags) {
    return res.status(400).json({ error: 'Almeno un dato deve essere fornito' });
  }

  if (id && typeof id !== 'number') {
    return res.status(400).json({ error: 'id deve essere un numero' });
  }

  if (title && typeof title !== 'string' || content && typeof content !== 'string' || image && typeof image !== 'string') {
    return res.status(400).json({ error: 'title, content e image devono essere stringhe' });
  }

  if (tags && !Array.isArray(tags)) {
    return res.status(400).json({ error: 'tags deve essere un array' });
  }

  if (tags) {
    for (const tag of tags) {
      if (typeof tag !== 'string') {
        return res.status(400).json({ error: 'Ogni tag deve essere una stringa' });
      }
    }
  }

  next();
};

module.exports = {
  validatePost,
  validateUpdate,
}
