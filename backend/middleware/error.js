
export function notFound(req, res, next) {
  res.status(404).json({
    message: `Route not found: ${req.method} ${req.originalUrl}`
  });
}

export function errorHandler(err, req, res, next) {
  console.error(err);

  const statusCode =
    res.statusCode >= 400 ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message || "Internal server error"
  });
}
