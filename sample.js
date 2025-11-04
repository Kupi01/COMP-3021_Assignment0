name: Run JavaScript

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  run-js:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Run JS file
        run: node sample.js
