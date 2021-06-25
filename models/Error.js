class Error {
  constructor(statusCode, message) {
    this.code = statusCode;
    this.result = "FAILURE";
    this.message = message;
  }

  static get INTERNAL_SERVER_ERROR() { return "INTERNAL_SERVER_ERROR" };
  static get BAD_REQUEST() { return "BAD_REQUEST" };
  static get UNAUTHORIZED() { return "UNAUTHORIZED" };
  static get FORBIDDEN() { return "FORBIDDEN" };
  static get NOT_FOUND() { return "NOT_FOUND" };

  static get INTERNAL_SERVER_ERROR_CODE() { return 500 };
  static get BAD_REQUEST_CODE() { return 400 };
  static get UNAUTHORIZED_CODE() { return 401 };
  static get FORBIDDEN_CODE() { return 403 };
  static get NOT_FOUND_CODE() { return 404 };

}

module.exports = Error;