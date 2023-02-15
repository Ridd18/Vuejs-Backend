// import express
import express from "express";

// import function from controller
import {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Product.js";

import {
  showUsers,
  createUser,
  deleteUser,
  loginUser,
} from "../controllers/Users.js";

import {upload} from "../multer/multer.js"

import { download, getListFiles } from "../models/fileModel.js"

// init express router
const router = express.Router();

//get all files
router.get("/files",getListFiles);

//download
router.get("files/:name",download)

//upload
router.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});



//get all users
router.get("/user", showUsers);

// get single user
router.get("/user/:id");

//register new user
router.post("/user", createUser);

//login
router.post("/user/login", loginUser);

//delete user
router.delete("/user/:id", deleteUser);

// Get All Product
router.get("/products", showProducts);

// Get Single Product
router.get("/products/:id", showProductById);

// Create New Product
router.post("/products", createProduct);

// Update Product
router.put("/products/:id", updateProduct);

// Delete Product
router.delete("/products/:id", deleteProduct);


// export default router
export default router;
