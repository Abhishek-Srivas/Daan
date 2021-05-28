module.exports = (err, _req, res, next) => {
  if (err.myErr) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  } else {
    // res.status(500).json({
    //   success: false,
    //   message: "Something went wrong",
    // });

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};