const config = {
  "username": process.env.MSQL_USER,
  "password": process.env.MSQL_PASSWORD,
  "host": process.env.MSQL_HOST,
  "dialect": "mysql"
}

const developmentConfig = {
  ...config,
  "database": process.env.MSQL_DATABASE_DEV,
}
const testConfig = {
  ...config,
  "database": process.env.MSQL_DATABASE_TEST,
}
const productionConfig = {
  ...config,
  "database": process.env.MSQL_DATABASE_PROD,
}

module.exports = {
  "development": developmentConfig,
  "test": testConfig,
  "production": productionConfig,
}

