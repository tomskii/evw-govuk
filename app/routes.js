var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/checkbox', function (req, res) {
  var cheese = req.session.data['like-cheese']

  if (cheese == 'No') {
    res.redirect('/check-answers');
  }
  else {
    res.render('checkbox');
  }
})


  // Branching

  router.get('/whoisapplying', function (req, res) {
    var whoisapplying = req.query.whoisapplying
    if (whoisapplying === 'yes') {
      res.redirect('/apply-for-minor')
    } else {
      res.render('check-your-answers')
    }
  })

module.exports = router
