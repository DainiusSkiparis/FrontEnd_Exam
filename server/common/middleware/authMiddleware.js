function auth(req, res, next) {
  const startTimestamp = Date.now();

  res.on("finish", () => {
    const endTimestamp = Date.now();
    const duration = endTimestamp - startTimestamp;
    const formattedDate = new Date(startTimestamp).toISOString();

    let requestType;
    if (req.method === "GET") {
      requestType = "GET";
    } else if (req.method === "POST") {
      requestType = "POST";
    } else {
      requestType = "Unknown";
    }

    console.log(
      `[${formattedDate}] ${requestType} request processed in ${duration}ms`
    );
  });

  next();
}

module.exports = auth;
