FROM node:16.17.0-alpine as builder
WORKDIR /app/entronica-app/
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/entronica-app/dist/entronica-angular/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]