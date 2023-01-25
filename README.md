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
MONGODB_CONNECTION = mongodb+srv://ejt-admin:===PASSWORD===@cluster0.ogshn.mongodb.net/bookapi?retryWrites=true&w=majority
MONGODB_CONNECTION_ENCRYPTED_PASSWORD = NNNNNNNNNNNNNNNNNNNNN 
SESSION_SECRET = NNNNNNNNNNNNNNNN
ADMIN_HASH = NNNNNNNNNNNNNNNNNNNNNNNNNNN
FRONTEND_URL = http://localhost:5031
NODE_ENVIRONMENT = development
```

## useful scripts

- `npm run encrypt` - creates encrypted password for the MongoDB connection string (be sure to change **SECRET_KEY** in the two files)
- `npm run bcrypt` - creates the hash of the admin password
