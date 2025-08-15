FROM node:18
# Thiết lập thư mục làm việc bên trong container
WORKDIR /app
# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./
# Cài đặt các phụ thuộc được định nghĩa trong package.json
RUN npm install
# Sao chép các tệp ứng dụng còn lại vào thư mục làm việc
COPY . .
# Mở cổng 3000 ra bên ngoài để ứng dụng có thể truy cập từ bên ngoài
EXPOSE 3000
# Lệnh để chạy ứng dụng chính
CMD ["node", "app.js"]