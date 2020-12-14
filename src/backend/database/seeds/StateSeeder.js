'use strict'

const fs = require('fs');
const StateService = use('App/Services/StateService');

/*
|--------------------------------------------------------------------------
| StateSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class StateSeeder {
  async run () {
    // StateService.bulkImport();
    // let rawdata = fs.readFileSync('database/datasources/states.json');
    // let states = JSON.parse(rawdata);
    // states.forEach((state)=>{
    //   StateService.store({
    //     id: state.id,
    //     name: state.name,
    //     initials: state.initials,
    //   })
    // });
  }
}

module.exports = StateSeeder
