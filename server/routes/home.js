
const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.send('MADE IT TO HOMEEEEEEE test')
})

module.exports = router

// router.get('/', (req, res, next) => {
//   res.send('creating seed data')
//   Campus.create({
//     name: 'University of Pennsylvania',
// 	  imageUrl: '../../public/images/UPenn.jpg'
//   })
//   .then(campus => campus.findAll({}))
//   .then(campuses => res.send(campuses))
//   // .then(campus => res.send(campus))
//   // .then(next)
//   // .catch(error => console.error(error))
// })



// // Seed the database
// router.get('/', (req, res, next) => {
//   res.send('creating seed data')
//   Campus.create({
//     name: 'University of Pennsylvania',
// 	  imageUrl: '../../public/images/UPenn.jpg'
//   })
//   .then(campus => campus.findAll({}))
//   .then(campuses => res.send(campuses))
//   // .then(campus => res.send(campus))
//   // .then(next)
//   // .catch(error => console.error(error))
// })

