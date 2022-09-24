FROM node:16.17.0 as build

LABEL description="This is a multi-stage NodeJS image"
WORKDIR /src
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .

FROM node:16.17.0-slim
WORKDIR /src 
COPY --from=build /src .
EXPOSE 3000
CMD ["npm", "start"]