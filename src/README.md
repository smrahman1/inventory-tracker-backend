# Service Template Backend
This is the source folder for Service Template Backend. In this folder, we have the following:

## 1.	[Controllers Folder](./controllers/)
The controllers folder contains all controllers the app utilizes to fulfil requests, typically these are `.js` files. A controller relies on a related service from the `services` folder, and should only contain basic logic with requests and error handling. <u>A controller should _NOT_ contain any database calls.</u>

## 2.   [DB Folder](./db/)
The db folder contains all database files and setup used in the app, typically these are `.js` files.
- [Migrations Folder](./db/migrations/) // The migrations folder contains all of the knex migrations run by the `npm run rollback` & `npm run migrate` commands. They define the knex schemas used to structure the db tables.
- [Models Folder](./db/models/) // The models folder contains all models the app utilizes to fulfil requests. A model contains the database connections and processing used in a request. <u>Database connections should _NOT_ exist anywhere outside this folder.</u>
- [database_connection.js](./db/database_connection.js) contains the knex configuration. This file should not have to be modified.
- [knexfile.js](./db/knexfile.js) is the base file for the knex initialization. This file should not have to be modified.

## 3.	[Middleware Folder](./middleware/)
The middleware folder contains the passport `LocalStrategy` authentication and helper functions, typically these are `.js` files. The passport setup/management should stay contained in this folder, specifically within [passport.js](./middleware/passport.js).

## 4.	[Routes Folder](./routes/)
The routes folder contains all routes used by the backend app, typically these are `.js` files. A route relies on a related controller from the `controllers` folder, and should only contain clean routing with no logic. <u>A route should _NOT_ contain any database calls.</u>

## 5.	[Services Folder](./services/)
The services folder contains all services used by the backend app, typically these are `.js` files. A service relies on a related model from the `db/models` folder, as an extra layer of abstraction. <u>A service should _NOT_ contain any database calls.</u>

## 6.	[Utils Folder](./utils/)
The utils folder contains extra helpers or data, typically these are `.js` files. Currently, the [constants.js](./utils/constants.js) file is used to configure the environment variables in the [.env](../.env) file; <u>other files should _NOT_ contain any `process.env` statements.</u>

## 7.	[app.js](./app.js)
The base JavaScript file for the application. All main app dependencies are imported and implemented here, and should stay here.

## Additional Notes
The following functions are provided for possible future use, and are currently not employed by the frontend:
- `getUsers()` in [user.js](./db/models/user.js)
- `getUsers()` in [userService.js](./services/userService.js)
- `getUsers()` in [userController.js](./controllers/userController.js)

These functions are connected through layers of abstraction, so do not change one before reviewing how all three work.