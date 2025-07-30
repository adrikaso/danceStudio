const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");

router.get("/getAll", classController.getAllClasses);
router.get("/getById/:id", classController.getClassById);
router.post("/create", classController.createClass);
router.put("/update/:id", classController.updateClass);
router.delete("/delete/:id", classController.deleteClass);

module.exports = router;