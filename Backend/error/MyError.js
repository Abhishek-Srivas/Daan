class MyError extends Error {
    constructor(statusCode, message) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, MyError);
        }

        this.myErr = true;
        this.statusCode = statusCode;
    }
}

module.exports = MyError;
