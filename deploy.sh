#!/bin/bash
# Usage: ./deploy.sh ubuntu@your-ec2-ip
set -e
HOST=${1:?Usage: ./deploy.sh user@host}

echo "Building..."
npm run build

echo "Syncing to $HOST..."
rsync -avz --exclude=node_modules --exclude=.env \
  build/ package.json package-lock.json ecosystem.config.cjs \
  "$HOST:~/surbhi-site/"

echo "Restarting on server..."
ssh "$HOST" "cd ~/surbhi-site && npm install --omit=dev && pm2 restart ecosystem.config.cjs --update-env"

echo "Done."
