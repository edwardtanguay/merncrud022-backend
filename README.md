# merncrud022-backend

this is an external fork of [Starter: Fullstack MERN site which allows user to add/edit/delete items via CRUD API using MongoDB and TypeScript/ES6-Modules on frontend/backend](https://starters.tanguay.eu/list/mernMongooseBookCrudFullstack)

## it adds the following features:

- (1) **ADMIN_PASSWORD** has been replaced with **ADMIN_HASH**
  - so the admin password is now secured with a bcrypt hash
- (2) **MONGDB_CONNECTION** password is no longer in plain text in the .env file
  - instead it has been replaced with **MONGODB_CONNECTION_PASSWORD_HASH** in the .env file

## .env file

``` text
APP_NAME = Book Site API
SECONDS_TILL_SESSION_TIMEOUT = 3600
PORT = 5030
MONGODB_CONNECTION = mongodb+srv://NNNNNNN:===PASSWORD===@cluster0.NNNNNN.mongodb.net/NNNNNNNNNNNNN?retryWrites=true&w=majority
MONGODB_CONNECTION_ENCRYPTED_PASSWORD = NNNNNNNNNNNNNNNNNNNNN 
SESSION_SECRET = NNNNNNNNNNNNNNNN
ADMIN_HASH = NNNNNNNNNNNNNNNNNNNNNNNNNNN
FRONTEND_URL = http://localhost:5031
NODE_ENVIRONMENT = development
```

## change all NNNNNNN values

- MongoDB username
- MongoDB URL
- MongoDB database name
- encrypted password
  - `npm run encrypt`
  - be sure to change **SECRET_KEY** in the two files
- session secret
  - just type in a random string
- admin_hast
  - `npm run bcrypt` - creates the hash of the admin password
