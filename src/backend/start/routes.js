'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')


Route.group(() => {
  Route.get('/', 'StateController.index').as('state.index')
  Route.post('/', 'StateController.store').as('state.store')
  Route.get('/bulk-import', 'StateController.bulkImport').as('state.bulkImport')
  // Route.get('create', 'StateController.create').as('state.create')
  // Route.get('/:id', 'StateController.show').as('state.show')
  // Route.put('/:id', 'StateController.update').as('state.update')
  // Route.patch('/:id', 'StateController.update')
  // Route.get('/:id/edit', 'StateController.edit').as('state.edit')
  // Route.delete('/:id', 'StateController.destroy').as('state.destroy')
}).prefix('api/v1/state')


Route.group(() => {
  Route.get('/', 'CityController.index').as('city.index')
  Route.post('/', 'CityController.store').as('city.store')
  Route.get('/bulk-import', 'CityController.bulkImport').as('city.bulkImport')
  Route.get('/state/:state', 'CityController.getByState').as('city.getByState')
}).prefix('api/v1/city')

Route.group(() => {
  Route.get('/:id', 'PhysicalPersonController.getById').as('physicalPerson.getById')
  Route.get('/', 'PhysicalPersonController.index').as('physicalPerson.index')
  Route.post('/', 'PhysicalPersonController.store').as('physicalPerson.store')
}).prefix('api/v1/physical-person')

Route.group(() => {
  Route.get('/:id', 'LegalPersonController.getById').as('legalPerson.getById')
  Route.get('/', 'LegalPersonController.index').as('legalPerson.index')
  Route.post('/', 'LegalPersonController.store').as('legalPerson.store')
}).prefix('api/v1/legal-person')
