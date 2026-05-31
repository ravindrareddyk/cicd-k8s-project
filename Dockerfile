FROM node:18-alpine

WORKDIR /app

COPY app/package*.json ./
RUN npm install --production

COPY app/ .

ARG APP_VERSION=1.0.0
ENV APP_VERSION=$APP_VERSION
ENV NODE_ENV=production

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["node", "app.js"]