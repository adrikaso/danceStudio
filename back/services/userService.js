const userRepository = require('../repositories/userRepository');

async function getAllUsers() {
    try {
        return await userRepository.getAllUsers();
    } catch (error) {
        throw new Error("Error in getAllUsers: " + error.message);
    }
}

async function getUserById(id) {
    try {
        return await userRepository.getUserById(id);
    } catch (error) {
        throw new Error("Error in getUserById: " + error.message);
    }
}

async function createUser(userData) {
    try {
        return await userRepository.createUser(userData);
    } catch (error) {
        throw new Error("Error in createUser: " + error.message);
    }
}

async function updateUser(id, userData) {
    try {
        return await userRepository.updateUser(id, userData);
    } catch (error) {
        throw new Error("Error in updateUser: " + error.message);
    }
}

async function deleteUser(id) {
    try {
        return await userRepository.deleteUser(id);
    } catch (error) {
        throw new Error("Error in deleteUser: " + error.message);
    }
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
