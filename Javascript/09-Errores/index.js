const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

function newError() {
  throw new Error("Esto es un error");
}

try {
  newError();
} catch (error) {
  logger.log('error', error.toString());
}
