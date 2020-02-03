const router = require('express').Router();
const verify = require('./verifyToken')

router.get('/', verify, (req, res) => {
  res.json({ posts: { title: "secret", description: "description lels" }})
})

module.exports = router;