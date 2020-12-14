'use strict'

const ObjectId = require('mongodb').ObjectId;
const Database = use('Database');


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PhysicalPerson extends Model {
  static collectionName = 'physical_person'

  getQueryBuilder(){
    return Database.collection(PhysicalPerson.collectionName);
  }

  async findById(id){
    return await Database
      .collection(PhysicalPerson.collectionName)
      .where({_id:  ObjectId(id)})
      .find()
  }

  async save(data){

    const cleanedData = {
      name: data.name,
      cpf: data.cpf,
      state_id: data.state_id,
      city_id: data.city_id,
      birth_date: data.birth_date,
      phone: data.phone,
    }

    if(data.hasOwnProperty('id') && data.id){
      const person = await this.findById(data.id);

      if(person.length === 0){
        return await this.insert(cleanedData);
      }

      return await Database
        .collection(PhysicalPerson.collectionName)
        .where({_id:  ObjectId(data.id)})
        .update(cleanedData);
    }

    return await this.insert(cleanedData);
  }

  async insert(data){
    return await Database
      .collection(PhysicalPerson.collectionName)
      .insert(data);
  }
}

module.exports = new PhysicalPerson
