const Teacher = require("../models/teacherModel");

const getAllTeachers = async () => await Teacher.find();
const getTeacherById = async (id) => await Teacher.findById(id);
const createTeacher = async (teacherData) => await Teacher.create(teacherData);
const updateTeacher = async (id, teacherData) => await Teacher.findByIdAndUpdate(id, teacherData, { new: true });
const deleteTeacher = async (id) => await Teacher.findByIdAndDelete(id);

module.exports = { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher };

