# latest official node image
FROM node:latest

MAINTAINER Sirisak

# Create app directory
WORKDIR /usr/src/app

# Install nodemon
RUN npm install -g nodemon 

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE  3001

# Run app using nodemon
CMD ["nodemon", "./bin/www"]