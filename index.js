const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./connect");
connectDb();
const authRouter = require("./routers/userRoute");
const lostRouter = require("./routers/lostRoute");
const CookieParser = require("cookie-parser");
const productRoutes = require("./routers/products");
const orderRoutes = require("./routers/orders");
const complaint = require("./routers/complaint");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(CookieParser());
app.get("/", (req, res) => {
  res.send("ALL IS WELL,LISTENING!");
});

app.use("/api/user", authRouter);
app.use("/api/user", lostRouter);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/complaints", complaint);
PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  console.log(`connected to ${PORT} `);
});
