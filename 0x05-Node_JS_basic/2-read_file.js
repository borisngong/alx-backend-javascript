const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines

    if (lines.length === 0) throw new Error('Cannot load the database');

    const headers = lines[0].split(','); // Extract headers
    const students = lines.slice(1);
    const fields = {};

    for (const line of students) {
      const student = line.split(',');
      if (student.length === headers.length) {
        // Process only well-formed lines
        const [firstname, , , field] = student;
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }
    }

    console.log(`Number of students: ${students.length}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}`,
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
