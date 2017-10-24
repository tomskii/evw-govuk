var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

  // Branching

  // kids4 restrictions logic
  router.get('/whoisapplying', function (req, res) {
    var whoisapplying = req.session.data['whoisapplying']
  if (whoisapplying === 'Yes') {
     res.redirect('/apply-for-minor')
   } else {
     res.render('check-your-answers')
     }
  })



module.exports = router
