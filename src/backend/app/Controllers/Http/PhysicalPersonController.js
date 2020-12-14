'use strict'

const Logger = use('Logger');
const PhysicalPersonService = use('App/Services/PhysicalPersonService');

class PhysicalPersonController {
  async index ({  request, response }) {
    try{
      const query = request.get()
      const person = await PhysicalPersonService.getByFilters(query);

      response.send({
        data: person,
      });

    }catch (e){
      Logger.error(e);
      response.send({
        success: false,
        message: 'Error ocurred during getting data'
      });
    }
  }

 async getById ({ params,  request, response }) {
    try{
      const person = await PhysicalPersonService.getById(params.id);

      response.send({
        data: person,
      });

    }catch (e){
      Logger.error(e);
      response.send({
        success: false,
        message: 'Error ocurred during getting data'
      });
    }
  }

  async store ({ request, response }) {
    try{
      const body = request.post()
      const person = await PhysicalPersonService.store(body);

      if(!person.success){
        response.send(person);
      }else{
        response.send({
          data: person.data,
          message: 'Person successfuly saved'
        });
      }

    }catch (e){
      Logger.error(e);
      response.send({
        success: false,
        message: 'Error ocurred during storing data'
      });
    }
  }

}

module.exports = PhysicalPersonController
