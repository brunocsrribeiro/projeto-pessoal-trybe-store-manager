const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const Joi = require('joi');

const error = (err, _req, res, _next) => {
    const errorJoi = Joi.isError(err);
    const errorString = err.details[0].type === 'string.min';
    const errorNumber = err.details[0].type === 'number.min';

    if (errorString || errorNumber) {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: err.message });
    } if (errorJoi) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
};

module.exports = {
    error,
};
