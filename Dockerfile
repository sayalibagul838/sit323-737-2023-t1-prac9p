FROM node:18.15.0
WORKDIR H:\Deakin\SIT737_Cloud\project
COPY package*.json server.js index.html ./
RUN npm install
