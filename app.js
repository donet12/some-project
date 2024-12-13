const express = require('express');
const app = express();
const PORT = 3000;

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
