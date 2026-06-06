import express from "express";
import { databaseInitialize } from "./db/sequelize.js";
import { getEnvVar } from "./util/getEnvVar.js";
import cors from "cors";
import { Product } from "./db/models/Product.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import productsRoutes from "./routes/productsRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = Number(getEnvVar("PORT", 4000));

async function startServer(req, res) {
  try {
    await databaseInitialize();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Failed to connect to the server. Database Initialize error");
  }
}
app.use("/api/products", productsRoutes);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});

startServer();
