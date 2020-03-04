FROM node:10.18-alpine

RUN mkdir iam
COPY . /iam
WORKDIR /iam
#Install library
RUN npm install
#Install Nodemon Globally
RUN npm install nodemon -g
#RUN npm install pm2 -g
Expose 8003
CMD ["nodemon"]
