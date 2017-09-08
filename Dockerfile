FROM democracyos/democracyos:2.6.2

MAINTAINER Matías Lescano <matias@democraciaenred.org>

WORKDIR /usr/src

ENV NODE_ENV=production \
    NODE_PATH=/usr/src

COPY ["ext", "ext"]

RUN bin/dos-ext-install --quiet --production

RUN npm run build -- --minify
