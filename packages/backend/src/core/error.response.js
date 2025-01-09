"use strict";
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

class ErrorResponse extends Error {
	constructor(message, status) {
		super(message);
		this.status = status;
	}
}

class BadRequestError extends ErrorResponse {
	constructor(message = ReasonPhrases.BAD_REQUEST, statusCode = StatusCodes.BAD_REQUEST) {
		super(message, statusCode);
	}
}

module.exports = {
	BadRequestError
};
