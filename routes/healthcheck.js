const router = require('express').Router();

router.get('/', (req, res) => {
  return res.setHeader('Content-Type', 'application/json').status(200).send("OK");
});

module.exports = router;