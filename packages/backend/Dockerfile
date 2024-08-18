ARG NODE_VERSION=18.20.4

FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

USER root

COPY . .
RUN npm install
RUN npm install pm2 -g

EXPOSE 3001

CMD [ "pm2-runtime", "npm", "--", "start" ]