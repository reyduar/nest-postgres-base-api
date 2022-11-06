<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<h1 align="center">Nest + Postgres Base API</h1>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This API was created with:

- [Nest](https://github.com/nestjs/nest)
- Postgres
- Docker

## References

- https://docs.nestjs.com/techniques/mongodb

## Author

Ariel Duarte (c)2022

## Installations

```bash
$ npm i -g @nestjs/cli
```

```bash
$ yarn install
```

## Runing Database

```bash
$ docker-compose up -d
```

## Rename **.env-template** file to **.env** into the projecto and setting your local environment variables

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

### Test Heroku Deployment

```bash
$ curl https://nest-pdex-api.herokuapp.com/api/v1/pokemon/all
```

### Production Build

1. Create `.env.prod` file.

2. Set environment variables to production (MONGODB, PORT, etc,).

3. First time create the new image:
   `docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build`
4. Second time use:
   `docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d`
