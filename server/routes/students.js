
const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Student = models.Student;

router.get('/', function (req, res, next) {
  Student.findAll({})
    .then(students => res.json(students))
    .catch(next);
})

router.get('/:studentId', function (req, res, next) {
  Student.findOne({
    where: {
      id: req.params.studentId
    }
  })
    .then(student => res.json(student))
    .catch(next);
})

router.post('/', function (req, res, next) {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
})

router.put('/:studentId', (req, res, next) => {
    Student.findOne({
        where: {
            id: req.params.studentId
        }
    })
      .then(student => student.update(req.body))
      .then(student => res.json(student))
      .catch(next)
})

router.delete('/:studentId', function (req, res, next) {
  Student.destroy({
    where: {
      id: req.params.studentId
    }
  })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;

