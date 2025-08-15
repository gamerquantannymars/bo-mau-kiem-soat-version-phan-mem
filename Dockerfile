FROM node:14
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install dependencies defined in package.json
RUN npm install
# Copy the rest of the application files to the working directory
COPY . .
# Expose port 3000 to the outside
EXPOSE 3000
# Command to run the application
CMD ["node", "app.js"]