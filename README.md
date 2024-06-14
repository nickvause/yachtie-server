
# REQUIREMENTS
+ Docker
+ NodeJS >14 & NPM

# GETTING STARTED
```npm i```
```npm run migrate```
```docker-compose up --build```
Then set up your DB as below.

# .ENV
Copy .env.example to .env and adjust as necessary. This was originally written on OSX so YMMV!

# DB
The DB will need initialisation and seeding to start development.
+ Start the DB (its a docker service, started above).
+ Connect using your favourite MySQL/MariaDB Client.
+ Create a Database and user account if you wish.
+ Run the seed job below to load in some data:
```npx sequelize-cli db:seed:all```

# Development
## To create a new DB migration:
```npx sequelize-cli migration:generate --name <migration-name>```
```npm run migrate``` 



