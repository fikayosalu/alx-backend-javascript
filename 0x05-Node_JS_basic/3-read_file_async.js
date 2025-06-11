const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1); // remove header

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

      resolve();
    });
  });
}

module.exports = countStudents;
