const courseRepository = require('../repositories/courseRepository');

async function getAllCourses() {
    try {
        return await courseRepository.getAllCourses();
    } catch (error) {
        throw new Error("Error in getAllCourses: " + error.message);
    }
}

async function getCourseById(id) {
    try {
        return await courseRepository.getCourseById(id);
    } catch (error) {
        throw new Error("Error in getCourseById: " + error.message);
    }
}

async function createCourse(courseData) {
    try {
        return await courseRepository.createCourse(courseData);
    } catch (error) {
        throw new Error("Error in createCourse: " + error.message);
    }
}

async function updateCourse(id, courseData) {
    try {
        return await courseRepository.updateCourse(id, courseData);
    } catch (error) {
        throw new Error("Error in updateCourse: " + error.message);
    }
}

async function deleteCourse(id) {
    try {
        return await courseRepository.deleteCourse(id);
    } catch (error) {
        throw new Error("Error in deleteCourse: " + error.message);
    }
}

module.exports = { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse };