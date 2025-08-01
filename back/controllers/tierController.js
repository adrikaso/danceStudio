const tierService = require('../services/tierService');

async function getAllTiers(req, res) {
    try {
        const tiers = await tierService.getAllTiers();
        res.status(200).json(tiers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getTierById(req, res) {
    const { id } = req.params;
    try {
        const tierData = await tierService.getTierById(id);
        if (!tierData) {
            return res.status(404).json({ message: "Tier not found" });
        }
        res.status(200).json(tierData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createTier(req, res) {
    const tierData = req.body;
    try {
        const newTier = await tierService.createTier(tierData);
        res.status(201).json(newTier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteTier(req, res) {
    const { id } = req.params;
    try {
        const deletedTier = await tierService.deleteTier(id);
        if (!deletedTier) {
            return res.status(404).json({ message: "Tier not found" });
        }
        res.status(200).json({ message: "Tier deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllTiers, getTierById, createTier, deleteTier };


