'use strict'

const Database = use('Database');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class State extends Model {
  static collectionName = 'states'

  getQueryBuilder(){
    return Database.collection(State.collectionName);
  }

  async save(data){
    return await Database
      .collection(State.collectionName)
      .insert(data);
  }

}

module.exports = new State
