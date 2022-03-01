FROM node:16

# md & cd workdir
WORKDIR /usr/app

# Copy application dependencies
COPY ./API/ ./

RUN npm install
RUN npm run build
# For production
# RUN npm install --only=production

EXPOSE 3000
CMD [ "npm", "start" ]