FROM node:latest

RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend
COPY . /usr/src/frontend
RUN npm install -g yarn
RUN yarn

EXPOSE 3131

CMD ["npm", "run", "start"]