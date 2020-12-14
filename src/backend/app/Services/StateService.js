'use strict'

const Axios = use('Axios');
const Database = use('Database');
const { validate } = use('Validator');
const Logger = use('Logger')

const State = use('App/Models/State')

class StateService {

  async getAll(){
    return await State.getQueryBuilder().find();
  }

  async store(data){

    const rules = {
      id: 'required|unique:states',
      name: 'required',
      initials: 'required'
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

    const stateId = await State.save(data);

    if(!stateId){
      return {
        success: false,
        errors: ['Error during get state id']
      }
    }

    return {
      success: true,
      state_id: stateId
    }
  }

  async bulkImport(){
    const options = {
      method: 'GET',
      url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
    };

    let count = 0;

    try {
      const response = await Axios.request(options);

      const data = response.data;

      if (data && data.length === 0){
        return count;
      }

      data.forEach(async(state)=>{
        let id = await this.store({
          id: state.id,
          name: state.nome,
          initials: state.sigla,
        });

        if(id){
          count++;
        }
      });

      return count;

    }catch(error) {
      console.error(error);
    }
  }

}

module.exports = new StateService
