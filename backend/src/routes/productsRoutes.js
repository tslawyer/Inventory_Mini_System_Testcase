import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  patchProduct,
  showAllProducts,
} from "../controller/productController.js";

const router = Router();

router.get("/", showAllProducts);
router.post("/", createProduct);
router.patch("/:id", patchProduct);
router.delete("/:id", deleteProduct);
export default router;
