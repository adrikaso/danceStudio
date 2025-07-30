const teacherService = require("../services/teacherService");

async function getAllTeachers(req, res) {
    try {
        const teachers = await teacherService.getAllTeachers();
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getTeacherById(req, res) {
    const { id } = req.params;
    try {
        const teacherData = await teacherService.getTeacherById(id);
        if (!teacherData) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        res.status(200).json(teacherData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createTeacher(req, res) {
    const teacherData = req.body;
    try {
        const newTeacher = await teacherService.createTeacher(teacherData);
        res.status(201).json(newTeacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateTeacher(req, res) {
    const { id } = req.params;
    const teacherData = req.body;
    try {
        const updatedTeacher = await teacherService.updateTeacher(id, teacherData);
        if (!updatedTeacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        res.status(200).json(updatedTeacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteTeacher(req, res) {
    const { id } = req.params;
    try {
        const deletedTeacher = await teacherService.deleteTeacher(id);
        if (!deletedTeacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        res.status(200).json({ message: "Teacher deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher };