const http = require('http');

const server = http
  .createServer((req, res) => {
    // res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write('Hello world');
    res.end();
  })
  .listen(9000);

console.log('Listening at port 9000');
