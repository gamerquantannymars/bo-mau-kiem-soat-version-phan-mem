const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config');

const app = express();

app.use(express.json());
app.use('/api', routes);

mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch(err => console.error('Kết nối MongoDB thất bại:', err));

app.listen(config.port, () => {
  console.log(`Server đang chạy trên http://localhost:${config.port}`);
});
