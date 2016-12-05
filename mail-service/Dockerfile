FROM node:argon
WORKDIR  /usr/app/mailservice
RUN pwd
ADD . /usr/app/mailservice
# RUN npm config set proxy http://DGattesc:Nextel32@proxynew.nextel.com.ar:8080

RUN npm install
RUN npm install --global nodemon

CMD [ "nodemon" ]