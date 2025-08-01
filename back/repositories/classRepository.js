const Class = require("../models/classModel");

const getAllClasses = async () => await Class.find();
const getClassById = async (id) => await Class.findById(id);
const createClass = async (classData) => await Class.create(classData);
const updateClass = async (id, classData) => await Class.findByIdAndUpdate(id, classData, { new: true });
const deleteClass = async (id) => await Class.findByIdAndDelete(id);

module.exports = { getAllClasses, getClassById, createClass, updateClass, deleteClass };
