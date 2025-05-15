# === STAGE 1: build ===
FROM node:22.15.0 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run data-layer-service:build

# === STAGE 2: production ===
FROM node:22.15.0

WORKDIR /app

# Копіюємо тільки необхідне
COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/apps/data-layer-service/src/assets ./apps/data-layer-service/src/assets
COPY --from=builder /app/apps/data-layer-service/src/app/shared/config/data-source.config.ts ./apps/data-layer-service/src/app/shared/config/data-source.config.ts

COPY apps/data-layer-service/entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

ENV NODE_ENV=production

CMD ["./entrypoint.sh"]
