import express from "express";
import cors from "cors";
import productsRouter from "./routes/products";
import testimonialsRouter from "./routes/testimonials";
// import usersRouter from "./routes/users";
// import cartsRouter from "./routes/carts";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/ping", (req, res) => {
  res.json({ message: "Server is live!" });
});

app.use("/api/products", productsRouter);
app.use("/api/testimonials", testimonialsRouter);
// app.use("/api/users", usersRouter);
// app.use("/api/carts", cartsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
