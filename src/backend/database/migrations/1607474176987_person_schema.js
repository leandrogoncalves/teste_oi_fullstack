'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonSchema extends Schema {
  up () {
    this.create('person', (table) => {
      table.increments()
      table.integer('id')
      table.string('name')
      table.string('document')
      table.integer('state_id').nullable()
      table.integer('city_id').nullable()
      table.string('birth_date').nullable()
      table.string('phone').nullable()
      table.string('type').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('person')
  }
}

module.exports = PersonSchema
