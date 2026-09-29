const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Інформаційна Система</title>
      <style>
        body { font-family: sans-serif; text-align: center; padding-top: 50px; background: #f0f4f8; }
        .card { background: white; padding: 30px; border-radius: 10px; display: inline-block; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        h1 { color: #1a365d; }
        .status { color: #38a169; font-weight: bold; font-size: 1.2em; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Інформаційна Система (Лабораторна №4)</h1>
        <p class="status">✓ Система успішно зібрана та розгорнута через Jenkins Pipeline!</p>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
