class customErrorAPI extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = customErrorAPI;
