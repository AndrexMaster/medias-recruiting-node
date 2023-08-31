This file contains a number of commands that need to be run to successfully install the backend.

# How connect to db (You must use only mariaDB)

Change data in /config/config.json - development

"development": {
    "username": "username",
    "password": "password",
    "database": "database",
    "host": "host",
    "dialect": "mariadb"
  },

# Step by step
npm install \
npm run migrate (Create tables) \
npm run seed (Fill product table) \
npm run start:dev (Start project using nodemon)
