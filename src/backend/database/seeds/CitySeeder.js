'use strict'

const CityService = use('App/Services/CityService');

/*
|--------------------------------------------------------------------------
| CitySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

class CitySeeder {
  async run () {
    CityService.bulkImport();
    // let rawdata = fs.readFileSync('database/datasources/cities.json');
    // let cities = JSON.parse(rawdata);
    // cities.forEach((city)=>{
    //   StateService.store({
    //     id: city.id,
    //     name: city.name,
    //     state_id: city.state_id,
    //     state_initials: city.state_initials,
    //   })
    // });
  }
}

module.exports = CitySeeder
