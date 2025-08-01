const tierRepository = require('../repositories/tierRepository');

async function getAllTiers() {
    try {
        return await tierRepository.getAllTiers();
    } catch (error) {
        throw new Error("Error in getAllTiers: " + error.message);
    }
}

async function getTierById(id) {
    try {
        return await tierRepository.getTierById(id);
    } catch (error) {
        throw new Error("Error in getTierById: " + error.message);
    }
}

async function createTier(tierData) {
    try {
        return await tierRepository.createTier(tierData);
    } catch (error) {
        throw new Error("Error in createTier: " + error.message);
    }
}

async function updateTier(id, tierData) {
    try {
        return await tierRepository.updateTier(id, tierData);
    } catch (error) {
        throw new Error("Error in updateTier: " + error.message);
    }
}

async function deleteTier(id) {
    try {
        return await tierRepository.deleteTier(id);
    } catch (error) {
        throw new Error("Error in deleteTier: " + error.message);
    }
}

module.exports = { getAllTiers, getTierById, createTier, updateTier, deleteTier };