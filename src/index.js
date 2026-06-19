const express = require("express");
const cors = require("cors");
const itemRoutes = require("./routes/items");
const { errorHandler, notFound } = require("./middleware/errorHandler");
 
const app = express();
const PORT = process.env.PORT || 3000;
 
// Middleware
app.use(cors());
app.use(express.json());
 
// Health check
app.get("/", (req, res) => {
  res.json({ message: "API is running", version: "1.0.0" });
});
 
// Routes
app.use("/api/items", itemRoutes);
 
// Error handling
app.use(notFound);
app.use(errorHandler);
 
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
