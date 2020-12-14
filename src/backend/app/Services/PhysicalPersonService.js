'use strict'

const { validate } = use('Validator');
const Logger = use('Logger');

const PhysicalPerson = use('App/Models/PhysicalPerson');

class PhysicalPersonService {

  async getByFilters(filters = null){
    const queryBuilder = PhysicalPerson.getQueryBuilder();

    if(filters.hasOwnProperty('name') && filters.name){
      queryBuilder.where({ name : {$regex: new RegExp(filters.name) }})
    }
    if(filters.hasOwnProperty('cpf') && filters.cpf){
      queryBuilder.where({ cpf : {$eq: filters.cpf }})
    }
    if(filters.hasOwnProperty('city_id') && filters.city_id){
      queryBuilder.where({ city_id : {$eq: parseInt(filters.city_id) }})
    }
    if(filters.hasOwnProperty('state_id') && filters.state_id){
      queryBuilder.where({ state_id : {$eq: parseInt(filters.state_id) }})
    }

    return await queryBuilder.find();
  }

  async getById(id) {
    return await PhysicalPerson.findById(id);
  }

  async store(data){

    const rules = {
      name: 'required',
      cpf: 'required',
      state_id: 'required',
      city_id: 'required',
      birth_date: 'required',
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

    const physicalPerson = await PhysicalPerson.save(data);

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

module.exports = new PhysicalPersonService;
