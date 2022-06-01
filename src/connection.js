const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    // The `host` parameter is required for other databases
    // host: 'localhost'
    dialect: 'sqlite',
    storage: './database.sqlite'
  });
  
//* Testing connection
//* runs a SELECT query and checks if the database responds correctly

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize; // ! Exporting Connection