FROM node:argon
WORKDIR  /usr/app/mailservice
RUN pwd
ADD . /usr/app/mailservice

RUN npm install --global nodemon

CMD [ "nodemon" ]