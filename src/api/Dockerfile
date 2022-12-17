FROM thecodingmachine/nodejs:v2-18-bullseye

USER root

RUN apt-get update -y &&\
    apt-get install openssh-client -y

RUN npm install -g pnpm

EXPOSE 8000

USER docker
