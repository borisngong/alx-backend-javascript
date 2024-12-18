const express = require("express");
const app = express();
const PORT = 7865;

app.use(express.json()); // Middleware to parse JSON bodies

app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});

app.get("/available_payments", (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post("/login", (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});

app.get("/cart/:id(\\d+)", (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.get("/cart/*", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
