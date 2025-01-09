const express = require('express');
const router = express.Router();
const posts = require('../data/posts')
const postsController = require('../controllers/postsController')
const { validatePost, validateUpdate } = require('../middlewares/checkData')

//index
router.get('/', postsController.index)

//show
router.get('/:id', postsController.show)

//store
router.post('/', validatePost, postsController.store)

//update
router.put('/:id', validateUpdate, postsController.update)

//modify
router.patch('/:id', postsController.modify)

//destroy
router.delete('/:id', postsController.destroy)

module.exports = router