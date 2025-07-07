# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy source code
COPY src/ ./src/
COPY package*.json ./

# Install dependencies (if any)
RUN npm install || true

# Expose port
EXPOSE 80

# Start the app (replace with your actual start command)
CMD ["npx", "serve", "src", "-l", "80"]
