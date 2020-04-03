FROM node:latest

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
COPY . /usr/src/server
RUN npm install

EXPOSE 3131

CMD ["npm", "run", "start"]