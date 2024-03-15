FROM node:20-bullseye-slim

LABEL authors="Instrate"

EXPOSE 3000

RUN npm install -g npm@10.5.0

RUN npm install -g nodemon

RUN npm install -g @nestjs/cli

WORKDIR /home/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "build:watch"]