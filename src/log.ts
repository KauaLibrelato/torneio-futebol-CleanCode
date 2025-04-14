import fs from "fs";

export const logError = (message: string) => {
  const logMessage = `${new Date().toISOString()} - ERROR: ${message}\n`;
  fs.appendFileSync("./logs/errors.log", logMessage);
};
