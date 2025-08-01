const Course = require('../models/courseModel');

const getAllCourses = async() => await Course.find();
const getCourseById = async(id) => await Course.findById(id);
const createCourse = async(courseData) => await Course.create(courseData);
const updateCourse = async(id, courseData) => await Course.findByIdAndUpdate(id, courseData, { new: true });
const deleteCourse = async(id) => await Course.findByIdAndDelete(id);

module.exports = { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse };
