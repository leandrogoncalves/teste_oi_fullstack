'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnidadeFederativaSchema extends Schema {
  up () {
    this.create('unidade_federativas', (table) => {
      table.increments()
      table.integer('id')
      table.string('nome')
      table.string('sigla').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('unidade_federativas')
  }
}

module.exports = UnidadeFederativaSchema
