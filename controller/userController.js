import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUserList = async (req, res, next) => {
  try {
    const post = await prisma.user.findMany();
    console.log("🚀 ~ file: userController.js:18 ~ getUserList ~ users:", post);
    res.json(post);
  } catch (error) {
    console.log(
      "🚀 ~ file: userController.js:10 ~ getUserList ~ error:",
      error
    );
  }
};

const getUserById = (req, res, next) => {
  console.log("🚀 ~ file: userController.js:12 ~ getUserById :");
};

const createUser = async (req, res, next) => {
  console.log("🚀 ~ file: userController.js:23 ~ createUser ~ req:", req.body);
  try {
    //create
    const newUser = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    res.status(200).json({
      message: "create successfully",
      data: newUser,
    });
  } catch (error) {
    console.log("🚀 ~ file: userController.js:37 ~ createUser ~ error:", error);
    res.status(400).json({
      message: error.message,
    });
  }
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
