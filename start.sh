#!/bin/bash
if ! command -v docker >/dev/null 2>&1; then
  echo "Error: Please install Docker (with the Compose plugin)"
  exit 1
fi

cd "$(dirname "$0")/docker/development" || exit 1

# Install into the node_modules volume when it's empty (or when -install is passed).
if [[ "$*" == *-install* ]] ||
  ! docker compose run --rm --entrypoint sh npm -c 'test -d node_modules/next' >/dev/null 2>&1; then
  echo "Installing dependencies"
  docker compose run --rm npm install
fi

echo "Starting development environment"
docker compose run --rm --service-ports npm run dev
