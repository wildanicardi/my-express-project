const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
  'dest': 'uploads/'
});
const {
  asyncErrorHandler
} = require('../middleware');
const {
  postIndex,
  postNew,
  postCreate,
  postShow,
  postEdit,
  postUpdate,
  postDestroy
} = require('../controllers/posts');

/* GET post page. */
router.get('/', asyncErrorHandler(postIndex));

/* GET post NEW.  /posts/new */
router.get('/new', postNew);
/* POST post create. /posts */
router.post('/', upload.array('images', 2), asyncErrorHandler(postCreate));

/* GET post show. /post/:id*/
router.get('/:id', asyncErrorHandler(postShow));
/* GET post edit. /post/:id/edit */
router.get('/:id/edit', asyncErrorHandler(postEdit));

/* PUT post update. /posts/:id */
router.put('/:id', asyncErrorHandler(postUpdate));

/* DELETE post destroy.  /posts/:id */
router.delete('/:id', asyncErrorHandler(postDestroy));
module.exports = router;