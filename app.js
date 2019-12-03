const fs = require('fs');

fs.readFile('./content.js', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
