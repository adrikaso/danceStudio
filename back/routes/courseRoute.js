const express = require('express');

const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/getAll', courseController.getAllCourses);
router.get('/getById/:id', courseController.getCourseById);
router.post('/create', courseController.createCourse);
router.put('/update/:id', courseController.updateCourse);
router.delete('/delete/:id', courseController.deleteCourse);

module.exports = router;