const User = require('../models/userModel');

const getAllUsers = async () => await User.find();
const getUserById = async (id) => await User.findById(id);
const createUser = async (userData) => await User.create(userData);
const updateUser = async (id, userData) => await User.findByIdAndUpdate(id, userData, { new: true });
const deleteUser = async (id) => await User.findByIdAndDelete(id);

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
