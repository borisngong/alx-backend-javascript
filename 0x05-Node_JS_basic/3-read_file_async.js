const fs = require("fs");

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(new Error("Cannot load the database"));
        return;
      }

      try {
        const lines = data.split("\n").filter((line) => line.trim() !== ""); // Remove empty lines
        if (lines.length <= 1) {
          throw new Error("Cannot load the database");
        }

        const headers = lines[0].split(","); // Extract headers
        const students = lines.slice(1);
        const fields = {};

        let totalStudents = 0;
        for (const line of students) {
          const student = line.split(",");
          if (student.length === headers.length) {
            // Process only well-formed lines
            const [firstname, , , field] = student;
            if (!fields[field]) fields[field] = [];
            fields[field].push(firstname);
            totalStudents += 1;
          }
        }

        console.log(`Number of students: ${totalStudents}`);
        for (const [field, names] of Object.entries(fields)) {
          console.log(
            `Number of students in ${field}: ${
              names.length
            }. List: ${names.join(", ")}`
          );
        }

        resolve();
      } catch (processingError) {
        reject(new Error("Cannot load the database"));
      }
    });
  });
}

module.exports = countStudents;
