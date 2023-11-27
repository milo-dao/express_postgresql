const getUserList = (req, res, next) => {
  console.log("🚀 ~ file: userController.js:3 ~ getUserList :");
};

const getUserById = (req, res, next) => {
  console.log("🚀 ~ file: userController.js:12 ~ getUserById :");
};

const createUser = (req, res, next) => {
  console.log("🚀 ~ file: userController.js:18 ~ createUser :");
};

const updateUser = (req, res, next) => {
  console.log("🚀 ~ file: userController.js:24 ~ updateUser :");
};

const deleteUser = (req, res, next) => {
  console.log("🚀 ~ file: userController.js:21 ~ deleteUser :");
};

export default {
  getUserList,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
