//Initialization
const express = require("express");
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

// app.set("view engine", "ejs");


//JWT
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

//MongoDB connection
const mongoose = require("mongoose");
const mongoUrl = "mongodb+srv://NirajSalvi:Turquoisedragon@cluster0.lmwpirq.mongodb.net/?retryWrites=true&w=majority";

//File Imports
const shipRoute = require('./ship.route');
app.use('/ship', shipRoute);
const orderRoute = require('./order.route');
app.use('/order', orderRoute);
const paymentRoute = require('./payment.route');
app.use('/payment', paymentRoute);
const mapRoute = require('./map.route');
// const mapRoute = require('./map2.route');
app.use('/trackingMap', mapRoute);

require("./userDetails");


//Razorpay




mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));


const User = mongoose.model("UserInfo");
app.post("/sign-up", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) { }
});

app.listen(3000, () => {
  console.log("Server Started");
});

