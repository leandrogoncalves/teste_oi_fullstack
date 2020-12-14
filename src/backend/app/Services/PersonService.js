'use strict'

const { validate } = use('Validator');
const Logger = use('Logger');

const Person = use('App/Models/Person');

class PersonService {

  async getByFilters(filters = null){
    const queryBuilder = Person.getQueryBuilder();

    if(filters.hasOwnProperty('name') && filters.name){
      queryBuilder.where({ name : {$regex: new RegExp(filters.name) }})
    }
    if(filters.hasOwnProperty('document') && filters.document){
      queryBuilder.where({ document : {$eq: filters.document }})
    }
    if(filters.hasOwnProperty('city_id') && filters.city_id){
      queryBuilder.where({ city_id : {$eq: parseInt(filters.city_id) }})
    }
    if(filters.hasOwnProperty('state_id') && filters.state_id){
      queryBuilder.where({ state_id : {$eq: parseInt(filters.state_id) }})
    }
    if(filters.hasOwnProperty('type') && filters.type){
      queryBuilder.where({ type : {$eq: filters.type }})
    }

    return await queryBuilder.find();
  }

  async getById(id) {
    return await Person.findById(id);
  }

  async store(data){

    const rules = {
      name: 'required',
      document: 'required',
      state_id: 'required',
      city_id: 'required',
      type: 'required',
      phone: 'required',
    }

    let validation;

    try{
      validation = await validate(data, rules)
    }catch (e){
      Logger.error(e);
    }

    if (validation.fails()) {
      return {
        success: false,
        errors: validation.messages()
      }
    }

    const physicalPerson = await Person.save(data);

    if(!physicalPerson){
      return {
        success: false,
        errors: ['Error during store physical people']
      }
    }

    return {
      success: true,
      person: physicalPerson
    }
  }

}

module.exports = new PersonService;
