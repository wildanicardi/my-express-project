const express = require('express');
const router = express.Router();

/* GET post page. */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts');
});

/* GET post NEW.  /posts/new */
router.get('/new', (req, res, next) => {
  res.send('NEW /posts/new');
});
/* POST post create. /posts */
router.post('/', (req, res, next) => {
  res.send(' CREATE posts');
});

/* GET post show. /post/:id*/
router.get('/:id', (req, res, next) => {
  res.send('SHOW /posts/:ID');
});
/* GET post edit. /post/:id/edit */
router.get('/:id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/edit');
});

/* PUT post update. /posts/:id */
router.put('/:id', (req, res, next) => {
  res.send('UPDATE posts/:id');
});

/* DELETE post destroy.  /posts/:id */
router.delete('/:id', (req, res, next) => {
  res.send('DESTROY /posts/:id');
});
module.exports = router;