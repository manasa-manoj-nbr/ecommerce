import { Router } from "express";
import products from "../data/products.json";
const router = Router();

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (product) res.json(product);
  else res.status(404).json({ error: "Product not found" });
});

export default router;
