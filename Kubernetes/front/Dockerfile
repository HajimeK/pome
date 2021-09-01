# referenced an article https://www.indellient.com/blog/how-to-dockerize-an-angular-application-with-nginx/
# docker build -t hajime/pome-front:latest .
# docker build -t hajime/pome-front:latest .
# docker image ls
# docker run -d -p 8080:80 hajime/pome-front:latest
# docker ps
FROM  node:latest as build
WORKDIR /usr/local/app
COPY ./angular /usr/local/app/
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/local/app/dist/pome /usr/share/nginx/html

EXPOSE 80