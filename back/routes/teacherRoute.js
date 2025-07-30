const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");

router.get("/getAll", teacherController.getAllTeachers);
router.get("/getById/:id", teacherController.getTeacherById);
router.post("/create", teacherController.createTeacher);
router.put("/update/:id", teacherController.updateTeacher);
router.delete("/delete/:id", teacherController.deleteTeacher);

module.exports = router;