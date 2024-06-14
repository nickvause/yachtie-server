
# REQUIREMENTS
> Docker
> NodeJS >14 & NPM

# GETTING STARTED
```npm i```
```npm run migrate```
```docker-compose up --build```

# .ENV
Copy .env.example to .env and adjust as necessary. This was originally written on OSX so YMMV!

# DB
## New migration:
```npx sequelize-cli migration:generate --name <migration-name>```
```npm run migrate``` 

## Loading from DB seed:
```npx sequelize-cli db:seed:all```




