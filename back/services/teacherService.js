const teacherRepository = require("../repositories/teacherRepository");

async function getAllTeachers() {
    try {
        return await teacherRepository.getAllTeachers();
    } catch (error) {
        throw new Error("Error in getAllTeachers: " + error.message);
    }
}

async function getTeacherById(id) {
    try {
        return await teacherRepository.getTeacherById(id);
    } catch (error) {
        throw new Error("Error in getTeacherById: " + error.message);
    }
}

async function createTeacher(teacherData) {
    try {
        return await teacherRepository.createTeacher(teacherData);
    } catch (error) {
        throw new Error("Error in createTeacher: " + error.message);
    }
}

async function updateTeacher(id, teacherData) {
    try {
        return await teacherRepository.updateTeacher(id, teacherData);
    } catch (error) {
        throw new Error("Error in updateTeacher: " + error.message);
    }
}

async function deleteTeacher(id) {  
    try {
        return await teacherRepository.deleteTeacher(id);
    } catch (error) {
        throw new Error("Error in deleteTeacher: " + error.message);
    }
}

module.exports = { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher };