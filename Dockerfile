# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the port your app runs on
EXPOSE 3001

# Define the command to run your app
CMD ["npx", "nodemon", "./src/app/server.js"]
