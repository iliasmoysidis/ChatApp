# Development
FROM node:20

WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install all dependencies including dev dependencies (like nodemon)
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port
EXPOSE 4000

# Command to run the application using nodemon
CMD ["npm", "run", "dev"]
# CMD ["sh", "-c", "node database/generate-models.js && npm run dev"]