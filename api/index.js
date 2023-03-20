import express from "express";
import mongoose from "mongoose";
const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
});