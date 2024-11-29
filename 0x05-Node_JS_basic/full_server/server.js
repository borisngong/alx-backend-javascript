import express from "express";
import routes from "./routes/index.js";

const app = express();
const PORT = 1245;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

export default app;
