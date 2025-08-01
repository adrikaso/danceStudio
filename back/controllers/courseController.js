const { get } = require('http');
const courseService = require('../services/courseService');

async function getAllCourses(req, res) {
    try {
        const courses = await courseService.getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getCourseById(req, res) {
    const { id } = req.params;
    try {
        const courseData = await courseService.getCourseById(id);
        if (!courseData) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.status(200).json(courseData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createCourse(req, res) {
    const courseData = req.body;
    try {
        const newCourse = await courseService.createCourse(courseData);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateCourse(req, res) {
    const { id } = req.params;
    const courseData = req.body;
    try {
        const updatedCourse = await courseService.updateCourse(id, courseData);
        if (!updatedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteCourse(req, res) {
    const { id } = req.params;
    try {
        const deletedCourse = await courseService.deleteCourse(id);
        if (!deletedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse };