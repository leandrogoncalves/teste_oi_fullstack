'use strict'

const Logger = use('Logger')
const CityService = use('App/Services/CityService');

class CityController {

  async index ({ request, response }) {
    try{
      const states = await CityService.getAll();

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

  async getByState ({ params, request, response }) {
    try{
      const states = await CityService.getByState({state: params.state});

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

  async bulkImport({ request, response }){
    try {

      const rowsAffecteds = await CityService.bulkImport();

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

module.exports = CityController
