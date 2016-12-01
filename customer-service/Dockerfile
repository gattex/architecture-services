FROM node:argon
WORKDIR  /usr/app/customerservice
RUN pwd
ADD . /usr/app/customerservice

RUN npm install
RUN npm install --global nodemon

EXPOSE 3000
CMD [ "nodemon" ]