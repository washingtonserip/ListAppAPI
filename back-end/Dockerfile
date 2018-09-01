FROM node:latest
WORKDIR /back-end
COPY package.json /back-end
RUN yarn install
COPY . /back-end
CMD yarn run start
EXPOSE 3000
