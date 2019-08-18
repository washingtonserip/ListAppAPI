FROM node:latest
WORKDIR /back-end
COPY package.json /back-end
RUN npm install
COPY . /back-end
CMD npm run start
EXPOSE 3000
