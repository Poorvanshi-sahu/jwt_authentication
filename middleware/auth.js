const { unauthorisedAPI } = require("../errors/index");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticationMiddleware = (req, res, next) => {
  console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new unauthorisedAPI("No token provided");
  }
  console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new unauthorisedAPI("Not authorized to access this route");
  }
};

module.exports = authenticationMiddleware;
