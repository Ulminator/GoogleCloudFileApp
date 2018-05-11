FROM node
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm i
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# The app binds to port 8080
EXPOSE 8080

ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}

ENV DOCKER=true

CMD if [ $NODE_ENV = development ]; then npm run dev; else npm start; fi