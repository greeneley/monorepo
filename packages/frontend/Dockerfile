# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=18.20.4

FROM node:${NODE_VERSION}-alpine as build

# Use production node environment by default.
ENV NODE_ENV=development


WORKDIR /usr/src/app


# Run the application as a non-root user.
USER root

# Copy the rest of the source files into the image.
COPY . .
RUN npm install
RUN npm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install -y nginx nodejs
RUN rm -v /etc/nginx/nginx.conf
ADD ./nginx.conf /etc/nginx/

COPY --from=build /usr/src/app/dist /var/www/html
EXPOSE 3005
#CMD ["nginx","start"]
CMD ["nginx", "-g", "daemon off;"]