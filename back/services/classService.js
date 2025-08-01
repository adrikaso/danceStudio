const classRepository = require('../repositories/classRepository');
const { DAYS_LABELS } = require('../utils/dayUtils');

async function getAllClasses(){
    try {
        const classes = await classRepository.getAllClasses();
        return classes.map(classData => addDayName(classData));
        
    } catch (error) {
        throw new Error("Error in getAllClasses: " + error.message);
    }
}

async function getClassById(id) {
    try {
        const classData = await classRepository.getClassById(id);
        return addDayName(classData);
    } catch (error) {
        throw new Error("Error in getClassById: " + error.message);
    }
}

function addDayName(classData) {
    if (!classData) return null;
    
    // Opción 1: Usando toObject()
    const classObj = classData.toObject();
    return {
        ...classObj,
        schedule: {
            ...classObj.schedule,
            dayName: DAYS_LABELS[classObj.schedule.dayOfWeek]
        }
    };
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