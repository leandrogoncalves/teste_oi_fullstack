'use strict'

const ObjectId = require('mongodb').ObjectId;
const Database = use('Database');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class LegalPerson extends Model {
  static collectionName = 'legal_person'

  getQueryBuilder(){
    return Database.collection(LegalPerson.collectionName);
  }

  async findById(id){
    return await Database
      .collection(LegalPerson.collectionName)
      .where({_id:  ObjectId(id)})
      .find()
  }

  async save(data){

    const cleanedData = {
      social_reason: data.social_reason,
      cnpj: data.cnpj,
      state_id: data.state_id,
      city_id: data.city_id,
      phone: data.phone,
    }

    if(data.hasOwnProperty('id') && data.id){
      const person = await this.findById(data.id);

      if(person.length === 0){
        return await this.insert(cleanedData);
      }

      return await Database
        .collection(LegalPerson.collectionName)
        .where({_id:  ObjectId(data.id)})
        .update(cleanedData);
    }

    return await this.insert(cleanedData);

  }

  async insert(data){
    return await Database
      .collection(LegalPerson.collectionName)
      .insert(data);
  }
}

module.exports = new LegalPerson
