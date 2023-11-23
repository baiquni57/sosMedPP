const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("ok")
  })

const validateLogin = (req, res, next) => {
  if(req.session.user){
    res.redirect("/home")
  }else {
    next()
  }
}

router.get('/register',validateLogin);
router.post('/register',validateLogin);
router.get('/login',validateLogin);
router.post('/login',validateLogin);

module.exports = router;