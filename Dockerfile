FROM node:7.10

RUN mkdir -p /www/jsonbrowse

ADD ./ /www/jsonbrowse
WORKDIR /www/jsonbrowse
RUN npm install
RUN npm run build

EXPOSE 3000
CMD npm run start
