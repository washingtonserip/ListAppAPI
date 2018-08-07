FROM node:latest
WORKDIR /back-end
RUN npm install -g typescript
COPY package.json /back-end
RUN npm install
COPY . /back-end
CMD npm run prod
EXPOSE 3000
