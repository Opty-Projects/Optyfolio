#!/bin/bash
if [[ ! -x "$(command -v docker)" || ! -x "$(command -v docker-compose)" ]]; then
  echo "Error: Please install docker and docker-compose"
  exit 1
fi

cd docker/development || exit

if [[ $* == *-install* || ! -d ../../node_modules ]]; then
  echo "Installing dependencies"
  docker-compose run --rm npm install --force
fi

echo "Starting development environment"
docker-compose run --rm --service-ports npm run dev
