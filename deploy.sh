#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Building..."
npm run build

echo "Clearing port 3000 if in use..."
fuser -k 3000/tcp 2>/dev/null || true

echo "Restarting..."
pm2 restart ecosystem.config.cjs --update-env

echo "Done."
