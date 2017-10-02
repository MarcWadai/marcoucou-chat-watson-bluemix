#!/bin/bash

docker tag chat-back msiri/marcoucou-chat-ai:chat-back
docker tag chat-mongodb msiri/marcoucou-chat-ai:chat-mongodb
docker tag chat-nginx msiri/marcoucou-chat-ai:chat-nginx

docker push msiri/marcoucou-chat-ai