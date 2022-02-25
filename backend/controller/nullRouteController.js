exports.nullRouteController = (req, res, next) => {
    //console.log('here');
    const message = "The url is not correct check it";
    const status = 400;
    const data = {url: req.protocol + '://' + req.get('host') + req.originalUrl, method: req.method}
    res.status(status).json({
      message: message,
      data: data
    });
  }