const { StatusCodes, getReasonPhrase } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
};
