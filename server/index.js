import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalle.routes.js";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" })); // Fixed the typo "limig" to "limit"

// Check if the API key is loaded properly
if (!process.env.OPENAI_API_KEY) {
  console.error("Error: OPENAI_API_KEY is missing in .env file");
  process.exit(1); // Exit if API key is not set
}

// Use the DALL-E routes
app.use("/api/v1/dalle", dalleRoutes);

// Basic route for testing
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
