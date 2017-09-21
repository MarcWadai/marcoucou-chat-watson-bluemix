FROM mongo:latest

# add our user and group first to make sure their IDs get assigned consistently, regardless of whatever dependencies get added
#RUN groupadd -r mongodb && useradd -r -g mongodb mongodb
#RUN su - mongodb
#RUN mkdir -p /data/db \
#	&& chmod -R 755 mongodb:mongodb /data/db

COPY . /data

RUN chown -R root:root /data/db

RUN chmod -R 777 /data/db

RUN echo $(ls -l /data)

# RUN mongo < /data/init-db.js

EXPOSE 27017

CMD ["mongod"]