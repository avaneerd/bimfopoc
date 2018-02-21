FROM node:alpine
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install --silent
COPY server.js server.js
EXPOSE 80
CMD [ "node", "server.js" ]