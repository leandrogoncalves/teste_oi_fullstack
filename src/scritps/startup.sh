#!/usr/bin/env bash

cd src/backend && cp .env.example .env
npm i
adonis key:generate
adonis migrate:run
