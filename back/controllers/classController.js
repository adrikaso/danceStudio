const classService = require('../services/classService');

async function getAllClasses(req, res) {
    try {
        const classes = await classService.getAllClasses();
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getClassById(req, res) {
    const { id } = req.params;
    try {
        const classData = await classService.getClassById(id);
        if (!classData) {
            return res.status(404).json({ message: "Class not found" });
        }
        res.status(200).json(classData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createClass(req, res) {
    const classData = req.body;
    try {
        const newClass = await classService.createClass(classData);
        res.status(201).json(newClass);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateClass(req, res) {
    const { id } = req.params;
    const classData = req.body;
    try {
        const updatedClass = await classService.updateClass(id, classData);
        if (!updatedClass) {
            return res.status(404).json({ message: "Class not found" });
        }
        res.status(200).json(updatedClass);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteClass(req, res) {
    const { id } = req.params;
    try {
        const deletedClass = await classService.deleteClass(id);
        if (!deletedClass) {
            return res.status(404).json({ message: "Class not found" });
        }
        res.status(200).json({ message: "Class deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllClasses, getClassById, createClass, updateClass, deleteClass };