const { StatusCodes, getReasonPhrase } = require('http-status-codes');

module.exports = (_err, _req, res, _next) => res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
