
const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Campus = models.Campus;

router.get('/', function (req, res, next) {
  Campus.findAll({})
    .then(campuses => res.json(campuses))
    .catch(next);
})

router.get('/:campusId', function (req, res, next) {
  Campus.findOne({
    where: {
      id: req.params.campusId
    }
  })
    .then(campus => res.json(campus))
    .catch(next);
})

router.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
})

router.put('/:campusId', (req, res, next) => {
    Campus.findOne({
        where: {
            id: req.params.campusId
        }
    })
      .then(campus => campus.update(req.body))
      .then(campus => res.json(campus))
      .catch(next)
})

router.delete('/:campusId', function (req, res, next) {
  Campus.destroy({
    where: {
      id: req.params.campusId
    }
  })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;

