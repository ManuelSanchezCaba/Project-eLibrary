FROM node:12.13.1

ENV NODE_ENV develoment

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]