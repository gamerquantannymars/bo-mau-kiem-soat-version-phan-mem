FROM node:14
# Thiết lập thư mục làm việc bên trong container
WORKDIR /app
# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./
# Cài đặt các phụ thuộc được định nghĩa trong package.json
RUN npm install
# Sao chép các tệp ứng dụng còn lại vào thư mục làm việc
COPY . .
# Mở cổng 3000 ra bên ngoài
EXPOSE 3000
# Lệnh để chạy ứng dụng
CMD ["node", "app.js"]