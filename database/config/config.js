require('dotenv').config() 
const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASSWORD || null

module.exports = {
  "development": {
    "username": 'root',
    "password": null,
    "database": "happyPet", /*happyPet é o nome da nossa DATABASE----- (database_development)ESCRITO antes sequelize*/
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
