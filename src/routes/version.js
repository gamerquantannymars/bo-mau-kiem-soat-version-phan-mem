const express = require('express');
const router = express.Router();

// Định nghĩa route cho việc quản lý phiên bản
router.get('/', (req, res) => {
  res.send('Trả về danh sách phiên bản.');
});

module.exports = router;
