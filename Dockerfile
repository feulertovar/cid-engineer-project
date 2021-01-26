FROM node:14.15.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Expose the node.js port to the Docker host.
EXPOSE 3000

CMD [ "node", "./bin/www" ]