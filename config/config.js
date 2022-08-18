require('dotenv').config()
module.exports = {
  "development": {
    "database": "starred",
    "dialect": "postgres"
  },
  "test": {
    "database": "starred",
    "dialect": "postgres"
  },
  production: {
    use_env_variable:'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}