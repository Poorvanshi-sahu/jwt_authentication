const customErrorAPI = require("./custom-errors");
const { StatusCodes } = require("http-status-codes");

class badRequestAPI extends customErrorAPI {
  constructor(message) {
    super(message);
    this.statuscode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = badRequestAPI;
