# merncrud022-backend

-   this is an external fork of [Starter: Fullstack MERN site which allows user to add/edit/delete items via CRUD API using MongoDB and TypeScript/ES6-Modules on frontend/backend](https://starters.tanguay.eu/list/mernMongooseBookCrudFullstack)

## it adds the following features:

- (1) **ADMIN_PASSWORD** has been replaced with **ADMIN_HASH**
  - so the admin password is now secured with a bcrypt hash
- (2) **MONGDB_CONNECTION** password is no longer in plain text in the .env file
  - instead it has been replaced with **MONGODB_CONNECTION_PASSWORD_HASH** in the .env file
  -   to set the hash, search for **SECRETKEY** and set it in two files
    -   run `npm run encrypt` with your password
    -   copy the resulting hash into the .env file
