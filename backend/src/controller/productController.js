import { asyncHandler } from "../util/asyncHandler.js";
import { Product } from "../db/models/Product.js";
import createHttpError from "http-errors";

export const showAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

export const createProduct = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body || Object.keys(req.body).length === 0) {
    throw createHttpError(400, "The request body must not be empty");
  }

  const payload = req.body;

  const errors = {};

  if (payload.name == null) errors.name = "Name is required";
  if (payload.quantity == null) errors.quantity = "Quantity is required";
  if (payload.price == null) errors.price = "Price is required";
  if (payload.quantity < 0)
    errors.quantity = "Quantity must be a positive number";
  if (payload.price < 0) errors.price = "Price must be a positive number";

  if (Object.keys(errors).length > 0) {
    throw createHttpError(400, "Validation failed", {
      errors,
    });
  }

  if (payload.quantity === 0) {
    payload.status = "out_of_stock";
  } else if (payload.quantity < 5) {
    payload.status = "low_stock";
  } else {
    payload.status = "in_stock";
  }
  const product = await Product.create(payload);

  res.status(201).json(product);
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    throw createHttpError(404, `Product with ${id} is not found`);
  }
  await product.destroy();
  res.json({ message: "Product deleted successfully" });
});

export const patchProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    throw createHttpError(404, `Product with ${id} is not found`);
  }
  const errors = {};

  if (req.body.name == null) errors.name = "Name is required";
  if (req.body.quantity == null) errors.quantity = "Quantity is required";
  if (req.body.price == null) errors.price = "Price is required";
  if (req.body.quantity < 0)
    errors.quantity = "Quantity must be a positive number";
  if (req.body.price < 0) errors.price = "Price must be a positive number";

  if (Object.keys(errors).length > 0) {
    throw createHttpError(400, "Validation failed", {
      errors,
    });
  }
  if (req.body.quantity === 0) {
    req.body.status = "out_of_stock";
  } else if (req.body.quantity < 5) {
    req.body.status = "low_stock";
  } else {
    req.body.status = "in_stock";
  }

  await product.update(req.body);

  res.json({
    message: "Product updated successfully",
    product,
  });
});
