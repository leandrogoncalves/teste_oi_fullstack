'use strict'

const Axios = use('Axios');
const Database = use('Database');
const { validate } = use('Validator');
const Logger = use('Logger');
const StateService = use('App/Services/StateService');
const City = use('App/Models/City');

class CityService {

  async getAll(){
    return await City.getQueryBuilder().find()
  }

  async getByState(filters){
    const queryBuilder = City.getQueryBuilder();
    return await queryBuilder
      .where({ state_initials : { $eq : filters.state.toUpperCase() } })
      .find();
  }

  async store(data){

    const rules = {
      id: 'required|unique:states',
      name: 'required',
      state_id: 'required',
      state_initials: 'required'
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

    const cityId = await City.save(data);

    if(!cityId){
      return {
        success: false,
        errors: ['Error during get city id']
      }
    }

    return {
      success: true,
      city_id: cityId
    }
  }

  async bulkImport(){
    try {
      let count = 0;
      const states = await StateService.getAll();

      if (states && states.length === 0){
        return count;
      }

      states.forEach(async(state)=>{
        const options = {
          method: 'GET',
          url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.initials}/municipios`,
        };
        const response = await Axios.request(options);

        const data = response.data;

        if (data && data.length === 0){
          return count;
        }

        data.forEach(async(city)=>{
          let id = await this.store({
            id: city.id,
            name: city.nome,
            state_id: state.id,
            state_initials: state.initials,
          });

          if(id){
            count++;
          }
        });

      });

      return count;

    }catch(error) {
      console.error(error);
    }
  }
}


module.exports = new CityService
