'use strict'

const Logger = use('Logger')
const StateService = use('App/Services/StateService');

class StateController {

  async index ({ request, response }) {
    try{
      const states = await StateService.getAll();

      response.send({
        data: states,
      });

    }catch (e){
      Logger.error(e);
      response.send({
        message: 'Error ocurred during getting data'
      });
    }
  }

  async store ({ request, response }) {
    try{
      const body = request.post()
      const state = await StateService.store(body);

      if(!state.success){
        response.send(state);
      }else{
        response.send({
          data: state.data,
          message: 'State successful'
        });
      }

    }catch (e){
      Logger.error(e);
      response.send({
        data: e
      });
    }
  }

  async bulkImport({ request, response }){
    try {

      const rowsAffecteds = await StateService.bulkImport();

      response.send({
        rowsAffecteds: rowsAffecteds,
      });

    }catch (e) {
      Logger.error(e);
      response.send({
        data: e
      });
    }
  }
}

module.exports = StateController
