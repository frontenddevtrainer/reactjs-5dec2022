FROM node:19.2 as build

WORKDIR /application

COPY ./package.json /application/package.json
COPY ./package-lock.json /application/package-lock.json

RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /application/build /usr/share/nginx/html