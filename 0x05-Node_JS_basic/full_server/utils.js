import fs from "fs";
import path from "path";

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(filePath), "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      }
      const lines = data.split("\n").slice(1); // Skip header
      const students = {};
      lines.forEach((line) => {
        const [firstname, major] = line.split(",");
        if (firstname && major) {
          if (!students[major]) {
            students[major] = [];
          }
          students[major].push(firstname);
        }
      });
      resolve(students);
    });
  });
};
