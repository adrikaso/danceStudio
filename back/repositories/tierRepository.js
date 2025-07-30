const Tier = require('../models/tierModel');

const getAllTiers = async () => {
    try {
        return await Tier.find();
    } catch (error) {
        throw new Error("Error fetching tiers: " + error.message);
    }
}

const getTierById = async (id) => {
    try {
        return await Tier.findById(id);
    } catch (error) {
        throw new Error("Error fetching tier by ID: " + error.message);
    }
}

const createTier = async (tierData) => {
    try {
        const tier = new Tier(tierData);
        return await tier.save();
    } catch (error) {
        throw new Error("Error creating tier: " + error.message);
    }
}

const updateTier = async (id, tierData) => {
    try {
        return await Tier.findByIdAndUpdate(id, tierData, { new: true });
    } catch (error) {
        throw new Error("Error updating tier: " + error.message);
    }
}

const deleteTier = async (id) => {
    try {
        return await Tier.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("Error deleting tier: " + error.message);
    }
}

module.exports = { getAllTiers, getTierById, createTier, updateTier, deleteTier };