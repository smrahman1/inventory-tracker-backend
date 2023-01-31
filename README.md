# Service Template Backend
This is a backend template running on a Postgres setup and Express middleware.


In order to setup this repository on your local system:
## 1.   Installation process
```
git clone {URL}
```

## 2.   Dependencies/Initializations
To update to the proper Node version for this repository (`18.0.0`):
```
n 18.0.0
```
To install dependencies:
```
npm install
```
Ensure that the [.env](./.env) file has the correct `PORT`, `DB_CONNECTION_STRING`, & `CORS_WHITELISTED_DOMAINS` values.

Run db migrations:
```
npm run rollback
npm run migrate
```

## 3.   Other commands
To lint all repo code:
```
npm run lint
```
To format all repo code:
```
npm run pretty
```
To start the server in development mode:
```
npm run startdev
```
To test the backend:
```
npm run test
```

## Additional Notes
To better understand how this application's backend works, it is recommended that you read the [Knex](https://knexjs.org/guide/) documentation first.