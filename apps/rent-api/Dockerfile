# === STAGE 1: build ===
FROM node:22.15.0 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run rent-api:build


# === STAGE 2: production ===
FROM node:22.15.0

WORKDIR /app

# Копіюємо тільки необхідне
COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/apps/rent-api/src/assets ./apps/rent-api/src/assets

ENV NODE_ENV=production

CMD ["node", "dist/apps/rent-api/main.js"]
