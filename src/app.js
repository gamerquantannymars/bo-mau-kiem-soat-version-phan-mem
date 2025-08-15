const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/version_control', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch(err => console.error('Kết nối MongoDB thất bại:', err));

// Định nghĩa route đơn giản để kiểm tra
app.get('/', (req, res) => {
  res.send('Chào mừng đến với dự án Bo Mẫu Kiểm Soát Version Phần Mềm!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên http://localhost:${PORT}`);
});
