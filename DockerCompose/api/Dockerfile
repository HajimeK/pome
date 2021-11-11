FROM node:16

# md & cd workdir
WORKDIR /usr/app

# Copy application dependencies
COPY API/package*.json ./
COPY ./API/src ./

RUN npm install
# For production
# RUN npm install --only=production


EXPOSE 3000
CMD [ "npm", "watch" ]