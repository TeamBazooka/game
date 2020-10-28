FROM node:15-buster as build

RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN yarn && yarn build

FROM nginx
COPY --from=build /app/dist/* /usr/share/nginx/html/
