
const router = require('express').Router();
module.exports = router;

router.get('/', (req, res, next) => {
	res.send('MADE IT TO ROUTES')
})

router.use('/home', require('./home'));
router.use('/campuses', require('./campuses'));
router.use('/students', require('./students'));

module.exports = router

// 404 handling
router.use(function (req, res) {
  res.status(404).send('Sorry, this page cannot be found');
});