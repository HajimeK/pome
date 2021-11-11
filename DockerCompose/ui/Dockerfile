FROM node:16

# md & cd workdir
WORKDIR /usr/app

# Copy application dependencies
COPY ./ui/*.* ./
COPY ./ui/src ./

RUN npm install
# For production
# RUN npm install --only=production
RUN npm run build


EXPOSE 4200
CMD [ "npm", "start" ]