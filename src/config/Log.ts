import winston from "winston";
import path from "path";
import moment from "moment-timezone";
import { Env as ENV } from "../globals/Env";

const currentDir = __dirname;
// Go one level above (back to 'src')
const srcDir = path.resolve(currentDir, "..");

// Change to 'logging' folder
const loggingDir = path.resolve(srcDir, "../src/logs");

// Function to format log entries with timestamp and timezone
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Set the desired timezone
const timeZone = "America/Chicago"; // For the US

const log = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: () => moment().tz(timeZone).format() }),
    customFormat
  ),
  transports: [
    new winston.transports.Console({ level: "debug" }),
    new winston.transports.File({
      filename: path.join(loggingDir, "test_run.log"),
      maxFiles: 5, // Number of log files to retain
      maxsize: 300 * 1024, // 10 * 1024 ==10 KB, specify the size in bytes
      // level: "info",
      // level: helper.stringToBoolean(ENV.LOG)? "info": "error",
      level: ENV.LOG_LEVEL.toLowerCase(),
    }),
    new winston.transports.File({
      filename: path.join(loggingDir, "test_error.log"),
      maxFiles: 5, // Number of log files to retain
      maxsize: 10 * 1024, // 10 KB, specify the size in bytes
      level: "error",
    }),
  ],
});

export default log;
