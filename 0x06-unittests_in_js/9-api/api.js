const express = require("express");
const app = express();
const PORT = 7865;

app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});

// New endpoint for cart
app.get("/cart/:id(\\d+)", (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Handle 404 for non-numeric cart IDs
app.get("/cart/*", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
