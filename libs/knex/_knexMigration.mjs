import { config } from '../providers/_packageProviders.mjs'
config()

export default {

  development: {
    client: process.env.CLIENT,
    connection: {
      host: process.env.MYSQL_HOSTNAME || process.env.MSSQL_HOSTNAME || process.env.PGSQL_HOSTNAME,
      user: process.env.MYSQL_USERNAME || process.env.MSSQL_USERNAME || process.env.PGSQL_HOSTNAME,
      password: process.env.MYSQL_PASSWORD || process.env.MSSQL_PASSWORD || process.env.PGSQL_HOSTNAME,
      database: process.env.MYSQL_DATABASE || process.env.MSSQL_DATABASE || process.env.PGSQL_HOSTNAME,
    },
    migrations: {
      tableName: 'migrations',
      directory: '../../database/migrations',
    },
    seeds: {
      directory: '../../database/seeds'
    }
  }
}

|| process.env.IS_MSSQL || process.env.IS_PGSQL