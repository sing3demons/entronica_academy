FROM node:16-alpine as build

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

COPY . .

RUN npm run build

FROM node:16-alpine 

ENV NODE_ENV=production

WORKDIR /usr/src/app


COPY --from=build /usr/src/app .
EXPOSE 3000
CMD ["node", "dist/index.js"]
