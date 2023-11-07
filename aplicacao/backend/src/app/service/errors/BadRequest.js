class BadRequest extends Error {
    constructor(message, errors = []) {
      super(message);
      this.statusCode = 400;
      this.errors = errors.map((err) => err.message);
    }
  }
  
  module.exports = BadRequest;