FROM node:12.0-alpine AS builder
COPY . ./client
WORKDIR /client
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /client/dist/client /usr/share/nginx/html