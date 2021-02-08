FROM node:14
# change working directory
WORKDIR /server
# copy only necessary files for dependencies install
COPY package.json yarn.lock .env.example ./
# install dependencies
RUN yarn install --frozen-lockfile
# set environment to production
ENV NODE_ENV production
# copy project files
COPY . .
# # generate swagger documentation
# RUN yarn doc
# # create database
# RUN node ace migration:refresh --force
# # seed database
# RUN node ace seed --force
# # start server
# CMD ["yarn", "run", "start"]
