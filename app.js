const fs = require('fs');

fs.readFile('./content.js', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(
  'contentCreateWithNode.js',
  'coucou !',
  { encoding: 'utf8', flag: 'w' },
  err => {
    if (err) throw err;
    console.log('you write in the file');
  }
);

// fs.readFile('./contentCreateWithNode.js');
