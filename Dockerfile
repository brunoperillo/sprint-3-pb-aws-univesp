FROM node

WORKDIR /scr

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000
CMD [ "node", "server.js" ]