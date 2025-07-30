const Class = require("../models/classModel");

const getAllClasses = async () => {
    try {
        return await Class.find().populate('teacher').populate('tier');
    } catch (error) {
        throw new Error("Error fetching classes: " + error.message);
    }
}

const getClassById = async (id) => {
    try {
        return await Class.findById(id).populate('teacher').populate('tier');
    } catch (error) {
        throw new Error("Error fetching class by ID: " + error.message);
    }
}

const createClass = async (classData) => {
    try {
        const classInstance = new Class(classData);
        return await classInstance.save();
    } catch (error) {
        throw new Error("Error creating class: " + error.message);
    }
}

const updateClass = async (id, classData) => {
    try {
        return await Class.findByIdAndUpdate(id, classData, { new: true }).populate('teacher').populate('tier');
    } catch (error) {
        throw new Error("Error updating class: " + error.message);
    }
}

const deleteClass = async (id) => {
    try {
        return await Class.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("Error deleting class: " + error.message);
    }
}    

module.exports = { getAllClasses, getClassById, createClass, updateClass, deleteClass };
