'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CidadeSchema extends Schema {
  up () {
    this.create('cidades', (table) => {
      table.increments()
      table.integer('id')
      table.string('nome')
      table.string('sigla').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cidades')
  }
}

module.exports = CidadeSchema
