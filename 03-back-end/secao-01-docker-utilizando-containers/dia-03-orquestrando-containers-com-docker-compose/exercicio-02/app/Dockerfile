FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install --loglevel=error

EXPOSE 3000

ENTRYPOINT ["npm"]

CMD ["run", "dev"]
