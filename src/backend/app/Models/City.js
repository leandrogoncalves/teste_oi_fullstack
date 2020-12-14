'use strict'

const Database = use('Database');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class City extends Model {

  static collectionName = 'cities'

  getQueryBuilder(){
    return Database.collection(City.collectionName);
  }

  async save(data){
    return await Database
      .collection(City.collectionName)
      .insert(data);
  }

}

module.exports = new City
