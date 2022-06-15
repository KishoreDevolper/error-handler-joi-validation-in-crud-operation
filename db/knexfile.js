const {knexSnakeCaseMappers} = require('objection')

module.exports = {
 development: {
    client: 'postgresql',
    connection: {
      database: 'DoodleBlue',
      user:     'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds:{
      directory:'./seeds'
    }
  }, 
...knexSnakeCaseMappers

};
