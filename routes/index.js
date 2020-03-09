const express = require('express');
const router = express.Router();
const {
  postRegister,
  postLogin,
  getLogout
} = require('../controllers');
const {
  asyncErrorHandler
} = require('../middleware');
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'My Express - Home'
  });
});

/* GET /register */
router.get('/api/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST /register */
router.post('/api/register', asyncErrorHandler(postRegister));

/* GET /login */
router.get('/api/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login */
router.post('/api/login', postLogin);
/* GET /logout */
router.get('/api/logout', getLogout);
/* GET /profile */
router.get('/api/profile', (req, res, next) => {
  res.send('GET /profile');
});

/* PUT /profile/:user_id */
router.put('/api/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id');
});

/* GET /forgot */
router.get('/api/forgot', (req, res, next) => {
  res.send('GET /forgot');
});

/* PUT /forgot */
router.put('/api/forgot', (req, res, next) => {
  res.send('PUT /forgot');
});

/* GET /reset */
router.get('/api/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token');
});

/* PUT /reset */
router.put('/api/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
});

module.exports = router;