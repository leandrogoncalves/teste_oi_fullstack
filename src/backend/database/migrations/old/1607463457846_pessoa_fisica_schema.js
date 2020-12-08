'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PessoaFisicaSchema extends Schema {
  up () {
    this.create('pessoa_fisicas', (table) => {
      table.increments()
      table.integer('id')
      table.string('nome')
      table.string('cpf')
      table.integer('uf_id').nullable()
      table.integer('cidade_id').nullable()
      table.string('data_nascimento').nullable()
      table.string('telefone').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pessoa_fisicas')
  }
}

module.exports = PessoaFisicaSchema
