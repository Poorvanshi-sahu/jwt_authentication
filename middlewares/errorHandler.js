const customErrorAPI = require("../errors/custom-errors");
const StatusCodes = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  if (err instanceof customErrorAPI) {
    return res.status(err.statuscode).json({ msg: err.message });
  }
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Something went wrong" });
};

module.exports = errorHandler;
