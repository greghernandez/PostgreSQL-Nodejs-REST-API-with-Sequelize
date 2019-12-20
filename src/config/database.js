require('dotenv').config()

import { Sequelize } from 'sequelize'

console.log('Variable de entorno: ', process.env.DB_URI)
export const sequelize = new Sequelize(process.env.DB_URI, {
  dialectOptions: {
    ssl: true
  },
  pool: {
    max: 5,
    min: 0,
    require: 3000,
    idle: 1000
  },
  logging: false
})

sequelize
  .authenticate()
  .then(() => {
    console.log('DB Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
