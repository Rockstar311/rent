#!/bin/sh

echo "Running migrations..."
npx ts-node ./node_modules/typeorm/cli.js migration:run -d apps/data-layer-service/src/app/shared/config/data-source.config.ts

echo "Starting app..."
node dist/apps/data-layer-service/main.js
