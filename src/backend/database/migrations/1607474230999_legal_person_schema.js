'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LegalPersonSchema extends Schema {
  up () {
    this.create('legal_people', (table) => {
      table.increments()
      table.integer('id')
      table.string('social_reason')
      table.string('cnpj')
      table.integer('state_id').nullable()
      table.integer('city_id').nullable()
      table.string('phone').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('legal_people')
  }
}

module.exports = LegalPersonSchema
