const router = require('express').Router();

router.get('/', (req, res) => {
  return res.status(200).send("OK");
});

module.exports = router;