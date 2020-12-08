'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PessoaJuridicaSchema extends Schema {
  up () {
    this.create('pessoa_juridicas', (table) => {
      table.increments()
      table.integer('id')
      table.string('razao_social')
      table.string('cnpj')
      table.integer('uf_id').nullable()
      table.integer('cidade_id').nullable()
      table.string('telefone').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pessoa_juridicas')
  }
}

module.exports = PessoaJuridicaSchema
