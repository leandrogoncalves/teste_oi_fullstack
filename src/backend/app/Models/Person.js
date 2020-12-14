'use strict'

const ObjectId = require('mongodb').ObjectId;
const Database = use('Database');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Person extends Model {
  static collectionName = 'person'

  getQueryBuilder(){
    return Database.collection(Person.collectionName);
  }

  async findById(id){
    return await Database
      .collection(Person.collectionName)
      .where({_id:  ObjectId(id)})
      .find()
  }

  async save(data){

    const cleanedData = {
      name: data.name,
      document: data.document,
      state_id: data.state_id,
      city_id: data.city_id,
      phone: data.phone,
      type: data.type,
      birth_date: !data.hasOwnProperty('birth_date')?'':data.birth_date,
    }

    if(data.hasOwnProperty('id') && data.id){
      const person = await this.findById(data.id);

      if(person.length === 0){
        return await this.insert(cleanedData);
      }

      return await Database
        .collection(Person.collectionName)
        .where({_id:  ObjectId(data.id)})
        .update(cleanedData);
    }

    return await this.insert(cleanedData);

  }

  async insert(data){
    return await Database
      .collection(Person.collectionName)
      .insert(data);
  }
}

module.exports = new Person
