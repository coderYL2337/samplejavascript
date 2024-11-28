const express = require("express");
const { calculateTotal } = require("./utils");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to PR Bot Test API" });
});

app.post("/calculate", (req, res) => {
  const { items } = req.body;

  if (!Array.isArray(items)) {
    return res.status(400).json({ error: "Items must be an array" });
  }

  const total = calculateTotal(items);
  res.json({ total });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
