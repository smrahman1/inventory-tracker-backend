# Service Template Backend
This folder contains all database files and setup used in the app, typically these are `.js` files.
- [Migrations Folder](./migrations/) // The migrations folder contains all of the knex migrations run by the `npm run rollback` & `npm run migrate` commands. They define the knex schemas used to structure the db tables.
- [Models Folder](./models/) // The models folder contains all models the app utilizes to fulfil requests. A model contains the database connections and processing used in a request. <u>Database connections should _NOT_ exist anywhere outside this folder.</u>
- [database_connection.js](./database_connection.js) contains the knex configuration. This file should not have to be modified.
- [knexfile.js](./knexfile.js) is the base file for the knex initialization. This file should not have to be modified.