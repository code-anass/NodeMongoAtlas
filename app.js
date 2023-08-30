const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const url = process.env.DATABASE;

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", function () {
  console.log("CONNECTED..");
});
