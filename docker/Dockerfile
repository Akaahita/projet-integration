FROM node:16-alpine3.15 AS dev
LABEL vendor="veone/angular-starter" maintainer="dev@veone.net" version="1.0.0"

WORKDIR /app

SHELL ["/bin/sh", "-xo", "pipefail", "-c"]

## Install system dependencies
#RUN apk update && \
#    apk add --no-cache --virtual dev-deps \
#	    git=2.34.6-r0 && \
#	    git config --global url."https://".insteadOf git://

FROM dev as test

WORKDIR /app

## Copy project files to workdir
COPY . .

FROM test as build

WORKDIR /app

ARG APP_CONFIGURATION=production

RUN set -ex && \
	yarn install --force --check-cache --immutable && \
	yarn ng build --configuration ${APP_CONFIGURATION} --output-path=dist/

FROM nginx:1.23.3-alpine AS deploy

# Remove default nginx static assets
RUN rm -rf ./usr/share/nginx/nginx.conf &&\
	rm -rf ./etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
