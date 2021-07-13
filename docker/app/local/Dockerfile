# Set the base image to node:12-alpine
FROM node:12-alpine

# Specify where our app will live in the container
WORKDIR /app

# Copy the React App to the container
COPY . ./

# Prepare the container for building React
RUN npm install

# start app
CMD ["npm", "start"]