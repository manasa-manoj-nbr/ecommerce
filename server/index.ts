import express from "express";
import cors from "cors";
import productsRouter from "./routes/products";
import testimonialsRouter from "./routes/testimonials";

/*Main Express application for Eclypse backend.Serves API endpoints for products and testimonials.*/
const app = express();

// Enable CORS for all origins (for development and frontend integration)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

/*Health check endpoint.GET /api/ping*/
app.get("/api/ping", (req, res) => {
  res.json({ message: "Server is live!" });
});

/*Product endpoints.GET /api/products */
app.use("/api/products", productsRouter);

/*Testimonial endpoints. GET /api/testimonials*/
app.use("/api/testimonials", testimonialsRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;

