const http = require('http');
const { readFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);

const countStudents = (path) => new Promise((resolve, reject) => {
  readFileAsync(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim().length > 0);
      lines.shift(); // Skip the header row
      const fields = {};

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(','); // Skip unused columns
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      let result = `Number of students: ${lines.length}\n`;
      for (const [field, students] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}\n`;
      }

      resolve(result.trim());
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const databasePath = process.argv[2];

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    countStudents(databasePath)
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
