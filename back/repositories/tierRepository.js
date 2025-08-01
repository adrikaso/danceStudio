const Tier = require("../models/tierModel");

const getAllTiers = async () => await Tier.find();
const getTierById = async (id) => await Tier.findById(id);
const createTier = async (tierData) => await Tier.create(tierData);
const updateTier = async (id, tierData) => await Tier.findByIdAndUpdate(id, tierData, { new: true });
const deleteTier = async (id) => await Tier.findByIdAndDelete(id);

module.exports = { getAllTiers, getTierById, createTier, updateTier, deleteTier };
