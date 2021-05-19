const { Model } = require('objection')
const knex = require('../lib/knex')

Model.knex(knex)

class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = User
