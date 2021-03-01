<!-- omit in toc -->
# 💧 Droplt API


> The unified API for torrent management.

<center>

  [![Test Coverage](https://api.codeclimate.com/v1/badges/b63218e6e4a02d3b2548/test_coverage)](https://codeclimate.com/github/droplt/droplt-api/test_coverage)
  [![Maintainability](https://api.codeclimate.com/v1/badges/b63218e6e4a02d3b2548/maintainability)](https://codeclimate.com/github/droplt/droplt-api/maintainability)
</center>

Built on top of Jackett and Transmission, Droplt offers a unified API to find, download and manage your torrents and your users.

It is the perfect companion for a Plex Media Server.

<!-- omit in toc -->
# Table of contents

- [:whale: Installation](#whale-installation)
- [:gear: Configuation](#gear-configuation)
- [:computer: Development](#computer-development)
  - [Requirements](#requirements)
  - [Install dependencies](#install-dependencies)
  - [Start environnement](#start-environnement)
  - [Stop environnement](#stop-environnement)
- [:cop: Testing](#cop-testing)
  - [Run tests](#run-tests)
  - [Unit testing](#unit-testing)
  - [Functional testing](#functional-testing)
  - [Tests helpers _(traits)_](#tests-helpers-traits)

# :whale: Installation

Droplt API is available publicly as a [Docker image](https://hub.docker.com/r/droplt/api) hosted on Docker Hub.

You can start using it with docker-compose:

```yml
version: "3.7"

services:
  api:
    image: droplt/api
    volumes:
      # where droplt-api stores its logs files
      - ./logs:/tmp/logs
      # where droplt-api download its .torrent files
      - ./torrens:/tmp/torrents
    environment:
      - APP_KEY=YourSecretAppKey
      …
    ports:
      - 3000:3000
```

To start the API just type `docker-compose up api` or to start it in the background `docker-compose up -d`.

# :gear: Configuation

Droplt API can be configured from the outside using **environment variables**.

One of the advantage to use **docker-compose** is the possibility to use a **`.env`** file to store environment variables values.

```bash
# .env
APP_KEY=YourSecretAppKey
…
```

Or you can use a **`docker-compose.override.yml`** file to serve this purpose:

```yml
# docker-compose.yml
version: "3.7"

services:
  api:
    image: droplt/api
    volumes:
      # where droplt-api stores its logs files
      - ./logs:/tmp/logs
      # where droplt-api download its .torrent files
      - ./torrens:/tmp/torrents
    ports:
      - 3000:3000
```

```yml
# docker-compose.override.yml
services:
  api:
    environment:
      - APP_KEY=YourSecretAppKey
```

Or using the **`docker`** CLI directly, pass environment and configuration variables to the command:

```bash
docker run droplt/api -e APP_KEY=YourSecretAppKey -p 3000:3000
```

# :computer: Development

## Requirements

You need to have **Docker**, **Yarn** and **NodeJS** installed on your computer.

## Install dependencies

```bash
yarn install
```

## Start environnement

```bash
yarn up
yarn dev
```

## Stop environnement

```bash
yarn down
```

# :cop: Testing

The whole API tends to be tested unitarily and functionally.

## Run tests

To run tests, use the npm script:
```bash
yarn test
```

Or if you want to generate the tests coverage:
```bash
yarn coverage
```

During a development session, you may want to adopt a TDD approach, tests can be run in **watch** mode, automatically restarting on every file change.

```bash
yarn test:watch
```

Or you can **specify** wich `.spec` files to **watch** to re-run tests faster:
```bash
yarn test:watch -f auth-login.spec.js
```

For further informations about **test** commands use:
```bash
yarn test:watch --help
```

## Unit testing

Unit tests are located under `./test/unit` folder.

## Functional testing

Functional tests are located under `./test/functional` folder.

## Tests helpers _(traits)_

Some helpers are available in tests using the `trait` design pattern.

```js
// This trait automatically creates a User with specified data
// It also truncate the User table after each test suite
trait('Test/Traits/User', { password: 'mypassword' })
```
