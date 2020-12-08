#!/usr/bin/env bash

docker run \
    --name mongodb_node \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=123 \
    -p 27016:27017 \
    --network node_net  \
    -d \
    mongo:4