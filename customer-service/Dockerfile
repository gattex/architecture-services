FROM node:argon
WORKDIR  /usr/app/customerservice
RUN pwd
ADD . /usr/app/customerservice

# RUN npm config set proxy http://DGattesc:Nextel32@proxynew.nextel.com.ar:8080
RUN npm install
RUN npm install --global nodemon

EXPOSE 3000
CMD [ "nodemon" ]