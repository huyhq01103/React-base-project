# Set the base image to node:12-alpine
FROM node:12-alpine as build

# Specify where our app will live in the container
WORKDIR /app

# Copy the React App to the container
COPY . /app/

# Prepare the container for building React
RUN npm install
# We want the production version
RUN npm run build

# Prepare nginx
FROM ccr.itim.vn/admins/nginx-unprivileged:0.4
COPY --from=build /app/build /app/public
COPY ./docker/app/nginx/conf.d /etc/nginx/conf.d