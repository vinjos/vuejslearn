FROM php:7.3.9-fpm-alpine3.10

WORKDIR /app

RUN apk add npm yarn

RUN npm install

CMD node

CMD yarn serve

EXPOSE 8082
