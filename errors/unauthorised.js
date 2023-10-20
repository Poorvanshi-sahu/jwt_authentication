const customErrorAPI = require("./custom-errors");
const { StatusCodes } = require("http-status-codes");

class unauthorisedAPI extends customErrorAPI {
  constructor(message) {
    super(message);
    this.statuscode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = unauthorisedAPI;
