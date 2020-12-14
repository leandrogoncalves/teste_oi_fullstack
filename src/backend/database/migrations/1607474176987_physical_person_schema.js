'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhysicalPersonSchema extends Schema {
  up () {
    this.create('physical_people', (table) => {
      table.increments()
      table.integer('id')
      table.string('name')
      table.string('cpf')
      table.integer('state_id').nullable()
      table.integer('city_id').nullable()
      table.string('birth_date').nullable()
      table.string('phone').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('physical_people')
  }
}

module.exports = PhysicalPersonSchema
