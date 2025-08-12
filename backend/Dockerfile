# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
# Using 'backend/' is important in a monorepo context
COPY backend/package*.json ./

# Install app dependencies, including devDependencies for testing in CI
RUN npm install

# Copy the rest of the backend source code
COPY backend/ .

# Your app binds to port 8000, so expose it
EXPOSE 5000

# Define the command to run the app
CMD [ "npm", "start" ]

