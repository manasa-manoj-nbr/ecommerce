import { Router } from "express";
import testimonials from "../data/testimonials.json";
const router = Router();

router.get("/", (req, res) => { res.json(testimonials) });
export default router;
