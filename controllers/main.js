const { badRequestAPI } = require("../errors/index");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new badRequestAPI("Please provide username and password");
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_TOKEN, {
    expiresIn: "30d",
  });

  res.status(200).json({ success: true, data: { username, password }, token });
};

const dashboard = async (req, res) => {
  console.log(req.user);
  const luckyNumber = Math.random() * 100;
  res.status(200).json({
    msg: "dashboard route",
    secret: `You are succesfully loged in and your lucky number is ${luckyNumber}`,
    header: req.headers,
  });
};

module.exports = { login, dashboard };
