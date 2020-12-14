'use strict'

const { validate } = use('Validator');
const Logger = use('Logger');

const LegalPerson = use('App/Models/LegalPerson');

class LegalPersonService {

  async getByFilters(filters = null){
    const queryBuilder = LegalPerson.getQueryBuilder();

    if(filters.hasOwnProperty('social_reason') && filters.social_reason){
      queryBuilder.where({ social_reason : {$regex: new RegExp(filters.social_reason) }})
    }
    if(filters.hasOwnProperty('cnpj') && filters.cnpj){
      queryBuilder.where({ cnpj : {$eq: filters.cnpj }})
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
    return await LegalPerson.findById(id);
  }

  async store(data){

    const rules = {
      social_reason: 'required',
      cnpj: 'required',
      state_id: 'required',
      city_id: 'required',
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

    const physicalPerson = await LegalPerson.save(data);

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

module.exports = new LegalPersonService;
