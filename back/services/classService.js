const classRepository = require('../repositories/classRepository');

async function getAllClasses(){
    try {
        return await classRepository.getAllClasses();
    } catch (error) {
        throw new Error("Error in getAllClasses: " + error.message);
    }
}

async function getClassById(id) {
    try {
        return await classRepository.getClassById(id);
    } catch (error) {
        throw new Error("Error in getClassById: " + error.message);
    }
}

async function createClass(classData) {
    try {
        return await classRepository.createClass(classData);
    } catch (error) {
        throw new Error("Error in createClass: " + error.message);
    }
}

async function updateClass(id, classData) {
    try {
        return await classRepository.updateClass(id, classData);
    } catch (error) {
        throw new Error("Error in updateClass: " + error.message);
    }
}

async function deleteClass(id) {
    try {
        return await classRepository.deleteClass(id);
    } catch (error) {
        throw new Error("Error in deleteClass: " + error.message);
    }
}

module.exports = { getAllClasses, getClassById, createClass, updateClass, deleteClass };