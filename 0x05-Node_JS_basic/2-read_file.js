const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const lines = data.trim().split('\n');
    const students = lines.slice(1); // Remove header

    const fields = {};
    let total = 0;

    for (const line of students) {
      if (line.trim() !== '') {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
        total += 1;
      }
    }

    console.log(`Number of students: ${total}`);

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
