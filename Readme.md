Watson Chat bot that answer questions about Marc

#Overview 
This application is a simple chat app link to Watson conversation API.
I used Vuejs as front dev, Nodejs for the back,  MongoDb for the database and nginx as webserver.

This is not meant to be a large scalable application, and lot of things can be improved.

This is my first app using docker and docker compose. You can set up rapidily a working environement on your machine using docker compose

# Build and run
- install docker, docker-compose etc
- in the root directory run `docker-compose build`
- docker-compose up -d 
- docker-compose exec mongodb mongo < ./data/init-db.js

=> you should have access to the static webstite
If you don't want to use docker you will to install Nodejs, mongodb and all the necessary tools

# Variables that need to be changed
For the front :
- front/src/service/constants.js => change to the correct address the api endpoint

For the back :
- I am using dotenv for the env varialbe. Create a file called `.env` and add those values :

WATSON_USERNAME=xxx
WATSON_PASSWORD=xxx
WATSON_VERSION=v1
WATSON_VERSION_DATE=2017-05-26
WATSON_WORKSPACE_ID=xxx
DB_URL=mongodb://xxx:27017/db_name

