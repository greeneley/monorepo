"use strict";

require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true
	})
);

app.use("/v1/api", require("./routes"));

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});

app.use((req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	const statusCode = error.status || 500;
	return res.status(statusCode).json({
		status: "error",
		code: statusCode,
		message: error.message || "Internal Server Error"
	});
});

module.exports = app;
