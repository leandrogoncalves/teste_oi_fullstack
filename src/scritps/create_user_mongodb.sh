#!/usr/bin/env bash

winpty docker exec -it mongodb_node \
    mongo --host localhost -u admin -p 123 --authenticationDatabase admin \
    --eval "db.getSiblingDB('teste_oi').createUser({user:'leandro',pwd:'123',roles:[{role:'readWrite', db: 'teste_oi'}]})"