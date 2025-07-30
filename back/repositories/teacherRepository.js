const Teacher = require("../models/teacherModel");

const getAllTeachers = async () => {
    try {
        return await Teacher.find();
    } catch (error) {
        throw new Error("Error fetching teachers: " + error.message);
    }
}

const getTeacherById = async (id) => {
    try {
        return await Teacher.findById(id);
    } catch (error) {
        throw new Error("Error fetching teacher by ID: " + error.message);
    }
}

const createTeacher = async (teacherData) => {
    try {
        const teacher = new Teacher(teacherData);
        return await teacher.save();
    } catch (error) {
        throw new Error("Error creating teacher: " + error.message);
    }
}

const updateTeacher = async (id, teacherData) => {
    try {
        return await Teacher.findByIdAndUpdate(id, teacherData, { new: true });
    } catch (error) {
        throw new Error("Error updating teacher: " + error.message);
    }
}

const deleteTeacher = async (id) => {
    try {
        return await Teacher.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("Error deleting teacher: " + error.message);
    }
}

module.exports = { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher };
